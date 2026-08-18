// Guardrails can run alongside your agents or block execution until they complete, allowing you to perform checks and validations on user input or agent output. For example, you may run a lightweight model as a guardrail before invoking an expensive model. If the guardrail detects malicious usage, it can trigger an error and stop the costly model from running.
import 'dotenv/config';
import { Agent, run, InputGuardrailTripwireTriggered } from '@openai/agents';
import { z } from 'zod';

const mathInputAgent = new Agent({
  name: 'Math query checker',
  instructions: `
  You are an input guardrail agent that checks if the user query is a maths question or not
  Rules:
  - The question has to be strictyly a maths equation only.
  - Reject any other kind of request ven if related to maths.
  `,
  outputType: z.object({
    isValidMathsQuestion: z.boolean().describe('if the question is a maths question'),
    reason: z.string().optional().describe('reason to reject'),
  }),
});

const mathInputGuardrail = {
  name: 'Math Homework Guardrail',
  execute: async ({ input }) => {
    const result = await run(mathInputAgent, input);
    return {
      outputInfo: result.finalOutput.reason,
      tripwireTriggered: !result.finalOutput.isValidMathsQuestion, // <-- This value decides if we have to trigger
    };
  },
};

const mathsAgent = new Agent({
  name: 'Maths Agent',
  instructions: 'You are an expert maths ai agent',
  inputGuardrails: [mathInputGuardrail],
});

async function main(q = '') {
  try {
    const result = await run(mathsAgent, q);
    console.log(`Result`, result.finalOutput);
  } catch (e) {
    if (e instanceof InputGuardrailTripwireTriggered) {
      console.log(`Invalid Input: Rejected because ${e.message}`);
    }
  }
}

main('2 +2 = ?');