import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from "zod";
import getWeather from "./tools/get-weather";

const server = new McpServer({
    name: "Weather Server",
    version: "1.0.0"
});

/**
 * Tools fall under a few... things
 * 1. General Non-task tables
 * *   List Records
 * *   Get Record
 * *   Create Record
 * *   Update Record
 * *   Delete Record
 * 1.1. User Management
 * *   Reset Password
 * *   Update Username
 * 1.2. Group Management
 * *   Add User to Group
 * *   Remove User from Group
 * *   Add Role to Group
 * *   Remove Role from Group
 * 2. Task Tables
 * *   List Tasks
 * *   Get Task
 * *   Create Task
 * *   Update Task
 * *   Delete Task
 * *   Add Comment
 * *   Add Worknote
 * 2.1. Change Mangement
 * *   Approve Change
 * *   Reject Change
 * *   Submit Change for Approval 
 * 3. CMDB Tables
 *     TBD
 */

server.tool(
    'get-weather',
    'Tool to get the weather of a city',
    {
        city: z.string().describe("The name of the city to get the weather for")
    },
    async ({ city }) => {
        return {
            content: [
                {
                    type: "text",
                    text: await getWeather({ city })
                }
            ]
        }
    }
);
const transport = new StdioServerTransport();
server.connect(transport);