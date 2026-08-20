# OpenAI Agents SDK + MCP Integration

A practical exploration of building **modern AI agent systems using the OpenAI Agents SDK and Model Context Protocol (MCP)**.

This project explores how an LLM application can evolve from a simple request/response workflow into a structured agent architecture with **multiple agents, tool calling, agent handoffs, MCP integrations, streaming, conversation management, human-in-the-loop workflows, and input/output guardrails**.

The implementation focuses on understanding the core building blocks required to develop extensible and tool-enabled AI applications.

## 🚀 What This Project Demonstrates

* AI agent creation and management
* Multi-agent orchestration
* Agent-to-agent handoffs
* Custom agent tools
* **Model Context Protocol (MCP) integration**
* MCP-based tool integration
* Conversation and session management
* Streaming AI responses
* Human-in-the-loop workflows
* Input guardrails
* Output guardrails
* Run/context management
* Tool calling
* Structured AI application architecture

## 🧠 Architecture

```text
                         User
                           │
                           ▼
                  Conversation Layer
                           │
                           ▼
                     Agent Manager
                           │
             ┌─────────────┼─────────────┐
             │             │             │
             ▼             ▼             ▼
           Agent        Handoffs      Human-in-
             │                         the-Loop
             │
       ┌─────┼─────────────┐
       │     │             │
       ▼     ▼             ▼
     Tools Context     Guardrails
       │
       ├───────────────┐
       │               │
       ▼               ▼
 Custom Tools       MCP Tools
                       │
                       ▼
                  MCP Server
                       │
                       ▼
              External Tools/Resources
                       │
                       ▼
                  OpenAI Model
                       │
                       ▼
               Streaming Response
                       │
                       ▼
                      User
```

The architecture separates **agent reasoning, tool execution, context management, safety controls, and external integrations** rather than placing the entire workflow inside a single model call.

## 🔌 Model Context Protocol (MCP)

The project also explores **Model Context Protocol (MCP)** as a standardized integration layer between AI agents and external tools or resources.

Instead of tightly coupling every capability directly to the agent application, MCP allows tools and resources to be exposed through an MCP server.

```text
AI Agent
   │
   ▼
MCP Client
   │
   ▼
MCP Server
   │
   ├── Tool
   ├── Tool
   ├── Tool
   └── Resource
```

This creates a more modular architecture where external capabilities can be added without changing the core agent logic for every integration.

### MCP Integration Flow

```text
User Request
     │
     ▼
OpenAI Agent
     │
     ▼
Determine Required Capability
     │
     ▼
MCP Tool
     │
     ▼
MCP Server
     │
     ▼
External System / Resource
     │
     ▼
Tool Result
     │
     ▼
Agent
     │
     ▼
Final Response
```

## 🔧 Agent Tools

The project explores application-defined tools that allow agents to perform actions beyond generating text.

Tools can be used to:

* Execute application-specific operations
* Retrieve external information
* Perform specialized tasks
* Provide additional capabilities to agents
* Return structured results back to the agent

This creates the foundation for **tool-enabled AI agents**.

## 🔄 Agent Handoffs

Instead of requiring a single agent to handle every type of request, the architecture supports transferring responsibility between specialized agents.

```text
User Request
      │
      ▼
Primary Agent
      │
      ├── General Request ─────────► Handle
      │
      ├── Specialized Request
      │          │
      │          ▼
      │   Specialized Agent
      │          │
      │          └────► Tools / MCP
      │
      └── Human Required
                 │
                 ▼
          Human-in-the-Loop
```

This approach allows individual agents to have focused responsibilities while participating in a larger workflow.

## 🛡️ Guardrails

The project includes **input and output guardrails** around the agent workflow.

Guardrails provide a validation layer for:

* User inputs
* Model outputs
* Potentially invalid requests
* Application-specific response requirements
* Agent execution boundaries

This becomes increasingly important when agents have access to tools or MCP servers capable of interacting with external systems.

## 👤 Human-in-the-Loop

The project explores workflows where an agent can pause automated execution and request **human intervention or approval**.

```text
Agent Decision
      │
      ▼
Requires Human Approval?
      │
   ┌──┴──┐
   │     │
  No    Yes
   │     │
   ▼     ▼
Execute  Human Review
            │
       ┌────┴────┐
       ▼         ▼
   Approved    Rejected
       │         │
       ▼         ▼
    Execute      Stop
```

This pattern provides an important foundation for AI systems performing actions with real-world consequences.

## 🌊 Streaming

The application explores streaming AI responses and agent execution events instead of waiting for the complete response before returning information to the user.

```text
User Request
     │
     ▼
Agent Execution
     │
     ▼
OpenAI Model
     │
     ├── Response Event
     ├── Tool Event
     ├── Agent Event
     ├── Handoff Event
     └── Final Response
             │
             ▼
           User
```

Streaming is particularly useful for conversational applications and longer-running agent workflows.

## 💬 Conversation Management

The project includes dedicated conversation and server-side conversation components for managing interactions between users and agents.

This provides a foundation for applications that require:

* Conversation state
* Multiple interactions
* Server-side execution
* Context passing
* Agent continuity

## 🧩 Run Context

Agent execution can require additional context such as user information, application state, configuration, or runtime-specific data.

The project explores **run context management** as a mechanism for passing this information through the agent workflow without relying entirely on the model's conversational context.

## 🛠️ Tech Stack

### AI

* **OpenAI Agents SDK**
* OpenAI Models
* **Model Context Protocol (MCP)**

### Runtime

* **Node.js**
* JavaScript
* TypeScript

### Agent Architecture

* Multi-agent workflows
* Agent handoffs
* Tool calling
* MCP tools
* MCP servers
* Run context
* Conversation management
* Human-in-the-loop workflows
* Streaming

### Safety & Validation

* Input guardrails
* Output guardrails
* Structured validation

## 🎯 Why I Built This

The goal of this project is to explore the architecture behind **AI agents that can reason, use tools, delegate work, maintain context, and interact with external systems**.

Rather than treating an LLM as a simple chatbot, this project focuses on building the components required for more capable AI applications:

```text
User
 │
 ▼
Intent
 │
 ▼
Agent
 │
 ├── Reason
 ├── Use Tools
 ├── Handoff
 ├── Access MCP
 ├── Maintain Context
 └── Request Human Approval
 │
 ▼
Result
```

The addition of MCP extends the architecture by providing a standardized approach for connecting agents with external tools and resources.

## 🔍 Key Engineering Concepts

* OpenAI Agents SDK
* AI agent orchestration
* Multi-agent systems
* **Model Context Protocol (MCP)**
* MCP client/server architecture
* Tool discovery and execution
* Tool calling
* Agent handoffs
* Context management
* Conversation management
* Streaming
* Input/output guardrails
* Human-in-the-loop workflows
* External tool integration
* Conversational AI architecture

## 📐 Architectural Evolution

The project explores the progression from a basic LLM application toward a more capable agent system.

### Level 1 — LLM

```text
User → Model → Response
```

### Level 2 — Agent

```text
User
 ↓
Agent
 ├── Tools
 ├── Context
 └── Guardrails
```

### Level 3 — Multi-Agent

```text
User
 ↓
Primary Agent
 ├── Agent A
 ├── Agent B
 └── Agent C
       │
       ▼
    Handoffs
```

### Level 4 — Agent + MCP

```text
User
 ↓
Agent
 ↓
MCP Client
 ↓
MCP Server
 ├── Tools
 ├── Resources
 └── External Systems
```

This architecture provides a foundation for building extensible AI applications where additional capabilities can be introduced through agents, tools, and MCP integrations.

## 📌 Project Status

This repository is an **experimental implementation** focused on exploring OpenAI agent architecture, multi-agent workflows, MCP integration, and modern AI application patterns.

Potential future improvements include:

* Persistent agent memory
* Additional MCP servers
* More specialized agents
* Tool permission management
* Authentication and authorization
* Agent evaluation pipelines
* Observability and tracing
* Production-grade error handling
* Tool execution sandboxing
* Automated agent testing
* Long-running agent workflows

---

**Built by [Palwinder Singh](https://github.com/PalwinderSinghPaali)**
