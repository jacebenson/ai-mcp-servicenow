# AI MCP Servicenow 

This is a work in progress.  Right now none of the tools are implemented.  The goal is to create a Model Context Protocol (MCP) server that can be used with ServiceNow on out of box instances.  This will allow you to use AI tools in ServiceNow without having to write any code in things like Open Web UI.

Want to learn more about the Model Context Protocol?  Check out the following resources:

- [Model Context Protocol Specification](https://modelcontextprotocol.org/)
- [FreeCodeCamp's How to Build a Custom MCP Server with TypeScript](https://www.freecodecamp.org/news/how-to-build-a-custom-mcp-server-with-typescript-a-handbook-for-developers/)
- [YouTube Video: How to Build a Custom MCP Server with TypeScript](https://youtu.be/AKjW94vQZkc?t=3750)

Note, This is inspired by the project at <https://github.com/echelon-ai-labs/servicenow-mcp>.  I like what they did but I wanted it in the TypeScript style that I use in my other projects.  Also Typescript is a lot closer to JavaScript and JavaScript is what's used in ServiceNow.

## Installation

### Pre-requisites

- Node.js
- A ServiceNow Instance

### Setup

```bash
git clone https://github.com/jacebenson/ai-mcp-servicenow.git
cd ai-mcp-servicenow
npm install
```

### Configuration

Create a `.env` file in the root directory with the following content:

```plaintext
SERVICENOW_INSTANCE_URL=https://dev12345.service-now.com
SERVICENOW_USERNAME=admin
SERVICENOW_PASSWORD=your_password_here
```

## Usage

Standard (stdio) Mode

I've mapped these to scripts in the `package.json` file so you can run them with `npm run server` or `npm run dev` or `npm run inspector`.

However you can also run them directly with `npx` if you prefer.

### Standard Mode

To start the MCP server in standard mode, run:

```bash
npx -y @modelcontextprotocol/inspector npx -y tsx main.ts
# or
npm run server
```

### Inspector Mode

To start the MCP server in inspector mode, run:

```bash
npx -y @modelcontextprotocol/inspector npx -y tsx main.ts --inspector
# or
npm run inspector
```

## Contributing

I've included a tool, `./tools/get-weather.js`, that demonstrates how to create a tool for the MCP server.  You can use this as a starting point for creating your own tools, or the tools I've spelled out in the `./main.ts` file.
