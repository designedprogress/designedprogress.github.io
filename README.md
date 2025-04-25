

# Welcome
=======

We are focused on AI applications, particularly new or innovative AI usage in customer-facing applications. We'll be adding content and will share practical tools and utilities we build from time to time. You can visit us at [https://designedprogress.ca](https://designedprogress.ca/), please feel free to connect with us via "Ask Us".

# What we are currently working on
=====================

We are experimenting with and implementing new AI enabled experiences that make use OF LLM's as foundational capabilities, but we are keen to extend their utility. To that end we are doing work with agentic persisted state, knowledge driven interactive experiences via RAG and the use of LLM tool calling, either directly or via MCP. We are also very interested in the concept of "agentic proxies", effectively your digital avatar that can perform tasks on your behalf, with you in the middle curating and deciding on the flow of information and transactions. We have some ideas around what will be required to make that happen and we are excited to work on new uses of AI tech, particularly in industries like retail, hospitality and travel.

# How we built our site
=====================

We chose Svelte 5, a UI framework that preprocesses code at build time and supports strict TypeScript. Styling was handled using Tailwind CSS for rapid styling. shadcn-svelte components make up most of the page elements, with a few custom components to support the Assistant, its state management, and rate limiting. We built with development tools like VS Code, Continue.Dev, Claude-Code, and GitHub to speed our workflow.

The AI assistant uses Vercel's AI SDK, OpenAI client, and OpenAI text embeddings. We created a Retrieval-Augmented Generation (RAG) system that provides our Assistant with a curated knowledgebase of markdown files that we think are important to the progress of the field. The language model dynamically decides when and how to use this knowledge, requiring effective prompting and a bit of agentic leeway. The RAG system stores text chunks and vectors in a serverless Pinecone.io index, with metadata and links managed via YAML frontmatter in the markdown files. This setup ensures proper attribution and supports rule-based decisions based on content attributes during inference.

We also have a number of LLM server tools implemented for the LLM to call at inference time. These include one for knowledge base searches, one to collect customer contact info and messages via CRM, and another to query the current status of the users' rate limit. We have a number of other interesting tools in the works, and we will roll those out over time.

We plan to also explore emerging technologies like MCP integration with headless commerce platforms, semantic routing, multimodal semantic tools, and voice-based agent interaction. These experiments will be showcased through the "Ask Us" Assistant and in our [Lab](https://designedprogress.ca/lab), and when we can, we'll share code here.

# Website Technology Overview
---------------------------

Below is an overview of the technologies and approaches used.

## Front End
---------

The front end is built with modern tools for a performant and maintainable user interface, leveraging the Svelte 5 framework, TypeScript, and Tailwind CSS for rapid styling.

-   [Svelte 5 (Runes-compliant)](https://svelte.dev/): A lightweight, reactive framework that compiles to efficient vanilla JavaScript, using Runes for improved state management.
-   [SvelteKit](https://svelte.dev/docs/kit/introduction): Svelte's full-stack framework for routing, server-side rendering, and static site generation.
-   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid, responsive styling.
-   [TypeScript](https://www.typescriptlang.org/): Adds strict typing to JavaScript for better code reliability and developer experience.
-   [shadcn-svelte](https://next.shadcn-svelte.com/): A component library for accessible, customizable UI elements.
-   [shadcn-sveltekit-landing-page](https://github.com/Zxce3/shadcn-sveltekit-landing-page): We adapted this Svelte starter template to Svelte 5 and Runes, using Claude Code for assistance, then customized it with our styling, tools, and components.

## AI & LLM Tools
--------------

Our AI implementation, centered on a Retrieval-Augmented Generation (RAG) system, is an experimental effort to explore large language models (LLMs), embeddings, and vector stores. The "Ask Us" Assistant is powered by this system, and we plan to experiment with visual search and customer-driven "taste" analysis in the future.

-   [Vercel AI SDK](https://sdk.vercel.ai/): Acts as middleware to abstract model-specific APIs, though some model-specific adjustments are needed. It simplifies integration with LLMs.
-   [Vercel AI SDK Tools](https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot-tool-usage): Enables server-side tools to be called by the LLM, streamlining functionality.
-   [OpenAI GPT-4.1-mini](https://platform.openai.com/docs/models/gpt-4o-mini): The primary LLM for the "Ask Us" Assistant, chosen for its balance of cost and performance.
-   [Pinecone.io](https://www.pinecone.io/): A serverless vector database that stores semantic vectors for our knowledgebase.
-   [OpenAI text-embedding-3-small](https://platform.openai.com/docs/guides/embeddings#embedding-models): Generates 1536-dimensional dense embeddings for semantic search.
-   [LangChain](https://blog.langchain.dev/typescript-support/): Assists with chunking and preprocessing the knowledgebase, stored as markdown (.md) files with YAML frontmatter for metadata and sourcing.
-   Knowledgebase Ingestion: TypeScript scripts leverage NPM to chunk content and send it to Pinecone's JSON API for indexing.
-   [Obsidian](https://obsidian.md/): Used to manage and edit the knowledgebase's markdown files, tagged with YAML frontmatter. We're exploring AI-driven automation for sourcing, classifying, and tagging content.

## Prompting
---------

Effective prompting is critical for our LLM's performance, especially with the structured knowledgebase.

-   [OpenAI GPT-4.5 Preview](https://platform.openai.com/docs/models/gpt-4.5-preview): Helps optimize prompts for GPT-4.1-mini, though experimentation is key. We store prompts in source control for versioning.
-   Prompt Design: Prompts are declarative and rely on the knowledgebase's structured metadata to guide the LLM's responses accurately.

## Development Tools
-----------------

We use a modern development stack, heavily augmented by AI coding agents to accelerate development.

-   VS Code: Our primary IDE for coding and debugging.
-   [Continue.Dev](https://www.continue.dev/): Provides in-IDE AI assistance and chat capabilities.
-   [Claude Sonnet 3.7](https://www.anthropic.com/claude/sonnet): Primary AI for code generation, with support from xAI's Grok 3 and Google Gemini 2.5.
-   [Mistral Codestral](https://mistral.ai/news/codestral): Used for inline code suggestions and fill-in-the-middle (FIM) tasks in the IDE.
-   GitHub: Hosts our code repositories and supports version control.

## Deployment
----------

The site is deployed on a flexible infrastructure, with SvelteKit's build time adapter enabling compatibility with multiple platforms. In our case, we are using adapter-node, and the infrastructure stack is:

-   AWS: Hosts the production environment.
-   Ubuntu 24.04: The server operating system.
-   Node.js 22.14: Powers the backend (exploring Deno as an alternative).
-   PM2: Manages Node.js processes for reliability.
-   Nginx: Acts as a reverse proxy for routing and load balancing.
-   Cloudflare: Provides DNS, CDN, and security services.
-   Deployment Flexibility: SvelteKit's auto-adapter supports easy deployment to Vercel, Netlify, or Cloudflare Workers.

## Technologies Under Exploration / Review
---------------------------------------

We're actively experimenting with additional tools and approaches to enhance our AI and development capabilities.

-   [OpenWebUI](https://openwebui.com/): A potential LLM proxy and playground for testing models and prompts.
-   [OpenRouter](https://openrouter.ai/): Simplifies access to multiple LLMs and enables inference-time abstraction.
-   [DataStax](https://www.datastax.com/): For advanced vector indexing and search capabilities.
-   [PostgresML](https://postgresml.org/docs/open-source/pgml/guides/vector-database): Exploring for vector database integration.
-   [Ollama](https://ollama.com/): For local model hosting, text-to-speech (TTS), speech-to-text (STT), and integration with tools like LangChain and PyTorch.
-   [Deepgram](https://deepgram.com/): For speech-to-text (STT) capabilities.
-   [Azure AI Speech](https://azure.microsoft.com/en-us/products/ai-services/ai-speech): For text-to-speech (TTS) functionality.
-   [Cohere Embeddings](https://cohere.com/embed): Additional embedding options for semantic search.
-   [Cohere Reranking](https://cohere.com/rerank): For improving search result relevance.
-   [Microsoft Markitdown](https://github.com/microsoft/markitdown): Preprocesses source documents into formatted markdown for the knowledgebase.
-   [Letta](https://www.letta.com/): Stateful, context length managed agents. Essentially agents with persistent memory, interagent communication, and agent context "memory management".
-   [Pipecat](https://www.pipecat.ai/): Open source framework for voice and multimodal conversational AI.

© 2025 DesignedProgress >_
