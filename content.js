const documentationContent = {
  about: `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">About Neko Code</h2>
                <p class="text-gray-300 leading-relaxed">
                    Neko Code is designed to enhance your Discord server experience with a wide range of features.
                    From moderation tools to fun commands and utility functions, Neko Code aims to be an all-in-one
                    solution for server management and community engagement. Our goal is to provide a stable,
                    user-friendly, and constantly evolving bot that resists the needs of various Discord communities.
                </p>
                <p class="text-gray-300 leading-relaxed mt-4">
                    Neko Code stands out with its commitment to a seamless user experience, offering intuitive commands and reliable performance. We continuously strive to incorporate feedback from our vibrant community to introduce new functionalities and refine existing ones, ensuring that Neko Code remains a cutting-edge tool for Discord server administration and entertainment. Our development team is dedicated to maintaining high standards of security and efficiency, providing a safe and enjoyable environment for all users. We believe in fostering a strong community around Neko Code, where users can share ideas, get support, and contribute to the bot's growth.
                </p>
                <p class="text-gray-300 leading-relaxed mt-4">
                    We are committed to regular updates, adding new features based on user feedback, and ensuring
                    the bot runs smoothly 24/7. Join our support server if you have any questions or suggestions!
                </p>
            `,
  "getting-started": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Getting Started</h2>
                <p class="text-gray-300 leading-relaxed mb-4">
                    Welcome to Neko Code! This guide will help you get started with adding the bot to your server and understanding its basic functionalities.
                </p>
                <h3 class="text-2xl font-medium text-white mb-3">1. Inviting Neko Code</h3>
                <p class="text-gray-300 mb-2">
                    To invite Neko Code to your Discord server, simply click on the "Invite Neko Code" button. Make sure you have "Manage Server" permissions on the server you wish to add the bot to.
                </p>
                <div class="code-block mb-8">
                    <p><strong>Invite Link:</strong> <a href="https://nekocode.in/invite" target="_blank" class="text-blue-400 hover:underline">https://nekocode.in/invite</a></p>
                </div>
                <h3 class="text-2xl font-medium text-white mb-3">2. Granting Permissions</h3>
                <p class="text-gray-300 mb-8">
                    During the invitation process, you will be asked to grant certain permissions to the bot. For Neko Code to function correctly, it's recommended to grant it the necessary permissions for its features (e.g., Send Messages, Manage Messages, Kick Members, etc.).
                </p>
                <h3 class="text-2xl font-medium text-white mb-3">3. Setting Up Your Server</h3>
                <p class="text-gray-300 mb-8">
                    Once invited, Neko Code will be online in your server. You can then configure specific settings or roles for the bot as needed. Refer to the "How to Use" and "Command List" sections for more details on configuration and commands.
                </p>
                <h3 class="text-2xl font-medium text-white mb-3">4. Getting Help</h3>
                <p class="text-gray-300 mb-8">
                    If you encounter any issues or have questions, join our <a href="https://nekocode.in/discord" target="_blank" class="text-blue-400 hover:underline">support server</a>.
                </p>
            `,
  features: `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Key Features</h2>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li><strong>Moderation:</strong> Keep your server clean and orderly with powerful moderation commands like kick, ban, mute, warn, and more.</li>
                    <li><strong>Utilities:</strong> Handy tools for everyday server tasks, including user info, server info, avatar lookup, and role management.</li>
                    <li><strong>Fun & Games:</strong> Engage your community with entertaining commands, mini-games, and interactive elements.</li>
                    <li><strong>Welcome and Goodbye:</strong> Automate welcome and goodbye messages for new and leaving members.</li>
                    <li><strong>Economy:</strong> Participate in a server-wide economy with various ways to earn and spend currency.</li>
                </ul>
                <p class="text-sm text-gray-400 mt-4">
                    <em>Note: Specific features may vary. Please refer to the command list for the most up-to-date information.</em>
                </p>
            `,
  "how-to-use": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">How to Use Neko Code</h2>
                <p class="text-gray-300 mb-8">
                    Using Neko Code is straightforward. Once invited to your server, you can start interacting with it
                    using commands.
                </p>

                <h3 class="text-2xl font-medium text-white mb-3">1. Inviting the Bot</h3>
                <p class="text-gray-300 mb-8">
                    To invite Neko Code to your server, click the "Invite Neko Code" button at the top of this page or refer to the <a data-page-id="getting-started" class="text-blue-400 hover:underline sidebar-link-in-content">Getting Started</a> section.
                    Make sure you have "Manage Server" permissions on the server you wish to invite it to.
                </p>

                <h3 class="text-2xl font-medium text-white mb-3">2. Bot Prefixes</h3>
                <p class="text-gray-300 mb-4">
                    Neko Code's prefixes are <strong>not customizable</strong>. You can use any of the following prefixes before a command: <code class="code-block inline-block px-2 py-1 text-sm">!</code>, <code class="code-block inline-block px-2 py-1 text-sm">$</code>, <code class="code-block inline-block px-2 py-1 text-sm">?</code>, <code class="code-block inline-block px-2 py-1 text-sm">></code>.
                </p>
                <div class="code-block mb-6">
                    <p>Example: <code class="code-block inline-block px-2 py-1 text-sm">!quote-this</code></p>
                    <p>Example: <code class="code-block inline-block px-2 py-1 text-sm">$balance</code></p>
                </div>

                <h3 class="text-2xl font-medium text-white mb-3">3. Slash Commands</h3>
                <p class="text-gray-300 mb-4">
                    Neko Code also supports Discord's native slash commands. These commands start with <code class="code-block inline-block px-2 py-1 text-sm">/</code>.
                    Slash commands cannot be used as prefix commands. Simply type <code class="code-block inline-block px-2 py-1 text-sm">/</code>
                    in your Discord chat, and a list of available commands will appear.
                </p>
                <div class="code-block mb-6">
                    <p>Example: <code class="code-block inline-block px-2 py-1 text-sm">/help</code></p>
                    <p>Example: <code class="code-block inline-block px-2 py-1 text-sm">/ping</code></p>
                </div>

                <h3 class="text-2xl font-medium text-white mb-3">4. Getting Help</h3>
                <p class="text-gray-300 mb-8">
                    For a full list of commands and their usage, type <code class="code-block inline-block px-2 py-1 text-sm">/help</code> in your Discord server.
                </p>
            `,
  "commands-overview": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Command List Overview</h2>
                <p class="text-gray-300 mb-6">
                    Neko Code offers a wide array of commands accessible via both slash commands (Discord's native commands starting with <code class="code-block inline-block px-2 py-1 text-sm">/</code>) and traditional prefix commands (starting with <code class="code-block inline-block px-2 py-1 text-sm">!</code>, <code class="code-block inline-block px-2 py-1 text-sm">$</code>, <code class="code-block inline-block px-2 py-1 text-sm">?</code>, <code class="code-block inline-block px-2 py-1 text-sm">></code>).
                    Below is an overview of the command categories. Click on the specific categories in the navigation to see detailed commands and their usage.
                </p>
                <h3 class="text-2xl font-medium text-white mb-3">Slash Commands</h3>
                <p class="text-gray-300 mb-8">
                    Slash commands are Discord's modern way of interacting with bots, offering auto-completion and integrated command options. They are generally preferred for a smoother user experience.
                    Explore the sub-sections for detailed lists of Moderation, Utility, Fun, GIFs, Image, Server Management, Support, Text Tools, Security, Tools, Other, Hire Neko, and Uncategorized slash commands.
                </p>
                <h3 class="text-2xl font-medium text-white mb-3">Prefix Commands</h3>
                <p class="text-gray-300 mb-8">
                    Prefix commands are the traditional way to interact with bots by typing one of the bot's prefixes (<code class="code-block inline-block px-2 py-1 text-sm">!</code>, <code class="code-block inline-block px-2 py-1 text-sm">$</code>, <code class="code-block inline-block px-2 py-1 text-sm">?</code>, <code class="code-block inline-block px-2 py-1 text-sm">></code>) followed by the command name.
                    Explore the sub-sections for detailed lists of Economy, Fun and Games, Utility, Look-up, Math & Conversion, and Meta prefix commands.
                </p>
            `,
  "commands-slash": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands</h2>
                <p class="text-gray-300 mb-8">
                    This section provides an overview of the main slash command categories. For detailed command usage and examples, please navigate to the specific sub-sections in the sidebar.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li><strong>Moderation:</strong> Commands to help you manage and moderate your server.</li>
                    <li><strong>Utility:</strong> General utility commands for server and user information, giveaways, and more.</li>
                    <li><strong>Fun:</strong> Engaging commands for entertainment and interaction.</li>
                    <li><strong>GIFs:</strong> Commands to send various anime-themed GIFs.</li>
                    <li><strong>Image:</strong> Commands related to images, including avatars and random animal pictures.</li>
                    <li><strong>Server Management:</strong> Tools for managing channels, roles, and user nicknames.</li>
                    <li><strong>Support:</strong> Commands to get help or report issues.</li>
                    <li><strong>Text Tools:</strong> Utilities for text manipulation like translation and anonymous confessions.</li>
                    <li><strong>Security:</strong> Commands for security-related checks.</li>
                    <li><strong>Tools:</strong> General purpose tools like password generation.</li>
                    <li><strong>Other Commands:</strong> Miscellaneous commands.</li>
                    <li><strong>Hire Neko:</strong> Information on hiring the developer.</li>
                    <li><strong>Uncategorized:</strong> Commands that don't fit into other categories.</li>
                </ul>
            `,
  "commands-slash-moderation": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands - Moderation</h2>
                <p class="text-gray-300 mb-8">
                    These commands help you maintain order and manage users within your server.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/kick</code> - Kick a user from the server.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/ban</code> - Ban a user from the server.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/unban</code> - Unban a user from the server.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/warn</code> - Warn a user in the server.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/warn-count</code> - Get the number of warnings a user in the server has.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/warn-clear</code> - Clear all warnings of a user in the server.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/purge</code> - Deletes a set number of messages.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/timeout</code> - Timeout a user.</li>
                </ul>
            `,
  "commands-slash-utility": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands - Utility</h2>
                <p class="text-gray-300 mb-8">
                    Handy tools for various server and bot-related information.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/giveaway</code> - Host a giveaway.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/ping</code> - Returns the latency of the bot.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/server-info</code> - Get information about this server.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/user-info</code> - Get a user's information.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/help</code> - Shows help menu or details about a command.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/invite</code> - Invite me to your server.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/create-invite</code> - Create an invite link for this server.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/define</code> - Search the meaning of a word.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/google</code> - Google something.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/todo-add</code> - Add a task to your to-do list.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/todo-list</code> - List all tasks in your to-do list.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/todo-remove</code> - Remove a task from your to-do list.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/todo-clear</code> - Clear all tasks from your to-do list.</li>
                </ul>
            `,
  "commands-slash-fun": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands - Fun</h2>
                <p class="text-gray-300 mb-8">
                    Commands to add a touch of fun and entertainment to your server.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/anime-quote</code> - Random anime quote.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/8ball</code> - Ask a question to decide something.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/joke</code> - Shares a joke.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/movie</code> - Suggests a movie.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/rank</code> - Check your or another user's level or XP.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/level-leaderboard</code> - View the top 10 users by XP in the current server.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/profile view</code> - View a user's profile.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/profile delete</code> - Permanently delete your profile.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/profile edit</code> - Edit your profile.</li>
                </ul>
            `,
  "commands-slash-gifs": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands - GIFs</h2>
                <p class="text-gray-300 mb-8">
                    Send various anime-themed reaction GIFs.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/react</code> - Sends an anime reaction GIF.</li>
                </ul>
            `,
  "commands-slash-image": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands - Image</h2>
                <p class="text-gray-300 mb-8">
                    Commands related to images and visual content.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/avatar</code> - View avatar of a user.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/cat</code> - Sends a random cute cat picture!</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/dog</code> - Sends a cute dog image.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/embed</code> - Create an embed.</li>
                </ul>
            `,
  "commands-slash-server-management": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands - Server Management</h2>
                <p class="text-gray-300 mb-8">
                    Tools to help you manage your Discord server's channels, roles, and members.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/create-channel</code> - Create a channel.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/delete-channel</code> - Delete a channel with its ID.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/add-role</code> - Add a role to a user.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/remove-role</code> - Remove a role from a user.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/set-nickname</code> - Set a user's nickname.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/mute</code> - Mute a user in a voice chat.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/unmute</code> - Unmute a user in a voice chat.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/slowmode</code> - Set the slowmode in the current channel.</li>
                </ul>
            `,
  "commands-slash-support": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands - Support</h2>
                <p class="text-gray-300 mb-8">
                    Commands to get assistance or report issues with the bot.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/report-bug</code> - Use this if something in the bot is not working correctly or is technically broken.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/report-user</code> - Report a user.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/report-status</code> - Check the status of your report.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/setup-tickets</code> - Setup the ticketing system in your server.</li>
                </ul>
            `,
  "commands-slash-text-tools": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands - Text Tools</h2>
                <p class="text-gray-300 mb-8">
                    Useful commands for text manipulation and communication.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/translate</code> - Translate something!</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/whisper</code> - Whispers a user.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/confess</code> - Confess something anonymously.</li>
                </ul>
            `,
  "commands-slash-security": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands - Security</h2>
                <p class="text-gray-300 mb-8">
                    Commands to help with security-related checks.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/setup-verification</code> - Setup CAPTCHA based verification for your server.</li>
                </ul>
            `,
  "commands-slash-tools": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands - Tools</h2>
                <p class="text-gray-300 mb-8">
                    General purpose tools for various tasks.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/generate-password</code> - Create a strong password.</li>
                </ul>
            `,
  "commands-slash-other": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands - Other Commands</h2>
                <p class="text-gray-300 mb-8">
                    Miscellaneous commands that provide general information or functionality.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/info</code> - Some information about me!</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/suggest</code> - Suggest something.</li>
                </ul>
            `,
  "commands-slash-hire": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands - Hire Neko</h2>
                <p class="text-gray-300 mb-8">
                    Information on how to hire the developer for custom Discord bot creation or server setup.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/hire</code> - Hire my developer for creating a discord bot or setting up discord servers.</li>
                </ul>
            `,
  "commands-slash-uncategorized": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Slash Commands - Uncategorized</h2>
                <p class="text-gray-300 mb-8">
                    Commands that do not fit into specific categories.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">/intents-status</code> - Check which intents are enabled.</li>
                </ul>
            `,
  "commands-prefix": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Prefix Commands</h2>
                <p class="text-gray-300 mb-8">
                    This section provides an overview of the main prefix command categories. For detailed command usage and examples, please navigate to the specific sub-sections in the sidebar. Remember the prefixes are <code class="code-block inline-block px-2 py-1 text-sm">!</code>, <code class="code-block inline-block px-2 py-1 text-sm">$</code>, <code class="code-block inline-block px-2 py-1 text-sm">?</code>, and <code class="code-block inline-block px-2 py-1 text-sm">></code>. The prefix <code class="code-block inline-block px-2 py-1 text-sm">!</code> is used as an example. You can use any of the four available prefixes.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li><strong>Economy:</strong> Commands related to the bot's in-built economy system.</li>
                    <li><strong>Fun and Games:</strong> Interactive games and fun commands to engage users.</li>
                    <li><strong>Utility:</strong> General purpose tools for various tasks.</li>
                    <li><strong>Look-up:</strong> Commands to fetch information from external sources.</li>
                    <li><strong>Math & Conversion:</strong> Commands for mathematical calculations and unit conversions.</li>
                    <li><strong>Meta:</strong> Miscellaneous commands providing bot information or general facts.</li>
                </ul>
            `,
  "commands-prefix-economy": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Prefix Commands - Economy</h2>
                <p class="text-gray-300 mb-8">
                    Manage your in-game currency "Neko Coins" and interact with the bot's economy system.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!balance</code> - Check your current balance.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!daily</code> - Claim your daily reward.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!buy</code> - Buy an item from the shop.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!work</code> - Work to earn money.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!beg</code> - Beg for money.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!crime</code> - Commit a crime.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!sell</code> - Sell items from your inventory.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!sellall</code> - Sell your entire inventory.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!use</code> - Use an item from your inventory.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!jobs</code> - See the list of available jobs.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!pay</code> - Pay some amount to another person.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!paytax</code> - Pay your taxes.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!payrent</code> - Pay your rent.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!inventory</code> - View items in your inventory.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!gift</code> - Gift items from your inventory to someone.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!shop</code> - Browse items available in the shop.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!leaderboard</code> - See the top 10 richest users on the server.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!lottery</code> - Try your luck with lottery tickets.</li>
                </ul>
            `,
  "commands-prefix-fun-games": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Prefix Commands - Fun and Games</h2>
                <p class="text-gray-300 mb-8">
                    Engage with interactive games and fun commands.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!blackjack</code> - Compete against the dealer to get closest to 21.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!rps</code> - Rock Paper Scissors.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!tictactoe</code> - Play Tic Tac Toe game with anyone in the server.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!typerace</code> - Starts a typing race.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!slots</code> - Play the slot machine game.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!coinflip</code> - Flip a coin.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!roulette</code> - Play roulette.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!crash</code> - Bet climbs until it explodes.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!cashout</code> - Bet climbs until it explodes.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!chess-stats</code> - Shows player's stats from Chess.com.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!chess-profile</code> - Shows player's profile on Chess.com.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!meme</code> - Send random memes.</li>
                </ul>
            `,
  "commands-prefix-moderation": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Prefix Commands - Moderation</h2>
                <p class="text-gray-300 mb-8">
                    Commands related to mod pingging and autoroles.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!pingmods</code> - Ping a moderator.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!pingmods add @Role</code> - Add a role to pingmods. (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!pingmods remove @Role</code> - Remove a role from pingmods. (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!autorole</code> - Show autorole command help.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!autorole set @Role</code> - Set the autorole for new members. (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!autorole remove @Role</code> - Remove a role from autorole. (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!autorole show</code> - Show the current autorole. (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!nickmod</code> - View AutoNick status (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!nickmod toggle on/off</code> - Enable or disable AutoNick. (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!nickmod add <words></code> - Block username keywords. (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!nickmod remove <words></code> - Unblock username keywords. (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!nickmod list</code> - List blocked username keywords. (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!linkblocker</code> - Shows the help menu and current status. (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!linkblocker enable</code> - Enable link blocker. (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!linkblocker disable</code> - Disable link blocker. (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!linkblocker allowrole(s)</code> - Allow roles to bypass link blocker. (Server admins only)</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!linkblocker removerole(s)</code> - Remove roles from bypassing link blocker. (Server admins only)</li>
                </ul>
            `,
  "commands-prefix-utility": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Prefix Commands - Utility</h2>
                <p class="text-gray-300 mb-8">
                    General utility commands for various helpful functions.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!afk</code> - Set your AFK statusu.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!ask</code> - Ask the bot questions.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!remindme</code> - Sets a reminder for you.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!shorten</code> - Shortens a URL.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!uptime</code> - Shows the bot's uptime.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!weather</code> - Check weather of a city using its postal code.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!quote-this</code> - Reply to a message to turn it into a quote.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!setinvitelog</code> - Sets a channel for logging invites.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!invites</code> - Open invite leaderboard and check user's invite count.</li>
                </ul>
            `,
  "commands-prefix-lookup": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Prefix Commands - Look-up</h2>
                <p class="text-gray-300 mb-8">
                    Commands to fetch information from various external sources.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!lyrics</code> - Search lyrics of a song.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!block-info</code> - Gives information about a Minecraft block.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!mcserver</code> - Checks the status of a Minecraft server.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!nasa</code> - Fetches NASA's Astronomy Picture of the Day.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!mars</code> - Gets Mars images.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!gita</code> - Fetches a verse from the Bhagavad Gita.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!repo</code> - Search a github repository.</li>
                </ul>
            `,
  "commands-prefix-math-conversion": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Prefix Commands - Math & Conversion</h2>
                <p class="text-gray-300 mb-8">
                    Commands for mathematical calculations and unit conversions.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!convert</code> - Convert currencies.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!factor</code> - Calculates the factors of a number.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!hex</code> - Converts a number to hexadecimal.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!rgb</code> - Converts RGB to HEX.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!sqrt</code> - Calculates the square root of a number.</li>
                </ul>
            `,
  "commands-prefix-meta": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Prefix Commands - Meta</h2>
                <p class="text-gray-300 mb-8">
                    Miscellaneous commands providing information about the bot or general facts.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!policy</code> - Displays the bot's policy.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!vedicfact</code> - Gives a random Vedic fact.</li>
                    <li><code class="code-block inline-block px-2 py-1 text-sm">!quote</code> - Fetches an inspirational quote.</li>
                </ul>
            `,
  "other-features": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Other Features</h2>
                <p class="text-gray-300 mb-8">
                    Beyond commands, Neko Code offers several passive and utility features to enhance your server experience.
                    Explore the sub-sections for detailed information on Detectors and the Quotes Message Link feature.
                </p>
            `,
  "other-features-detectors": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Other Features - Detectors</h2>
                <p class="text-gray-300 mb-8">
                    Neko Code includes intelligent detectors to help maintain server safety and transparency.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><strong>Token Detector:</strong> Automatically detects and warns users who accidentally post Discord bot tokens in chat, helping to prevent security breaches.</li>
                    <li><strong>Ghost Ping Detector:</strong> Identifies and notifies users when someone "ghost pings" (mentions someone and then quickly deletes the message), promoting transparency.</li>
                </ul>
            `,
  "other-features-quotes-link": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Other Features - Quotes Message Link</h2>
                <p class="text-gray-300 mb-8">
                    Enhance your conversation flow with automatic message embedding.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li>When a Discord message link is posted, Neko Code can automatically embed the content of that message, making it easier to see quoted messages without leaving the current channel.</li>
                </ul>
            `,
  support: `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Support & Community</h2>
                <p class="text-gray-300 mb-8">
                    We are dedicated to providing comprehensive support for all Neko Code users. If you encounter any issues, have questions about bot functionality, or wish to suggest new features, our community and support team are here to help. We encourage you to join our official Discord support server, where you can connect with other users, get real-time assistance from our moderators, and stay updated on the latest news and announcements. Your feedback is invaluable in helping us improve Neko Code and ensure a smooth experience for everyone.
                </p>
                <h3 class="text-2xl font-medium text-white mb-3 mt-6">How to Get Support:</h3>
                <ul class="list-disc list-inside text-gray-300 space-y-2 mb-4">
                    <li><strong>Join our Discord Server:</strong> The fastest way to get help is by joining our official <a href="https://nekocode.in/discord" target="_blank" class="text-blue-400 hover:underline">Support Server</a>. Here, you can ask questions in dedicated support channels, report bugs, and interact directly with the Neko Code team and other experienced users.</li>
                    <li><strong>Check the FAQ:</strong> Before asking a question, please refer to our Frequently Asked Questions (FAQ) section (if available) on the Discord server or within the documentation. Many common issues are addressed there.</li>
                    <li><strong>Use Command Help:</strong> For specific command usage, remember you can always type <code class="code-block inline-block px-2 py-1 text-sm">/help</code> in your Discord server to get detailed information about any command.</li>
                    <li><strong>Report an Issue:</strong> If you find a bug or an unexpected behavior, please use the <code class="code-block inline-block px-2 py-1 text-sm">/report-bug</code> slash command in your server or report it directly in the support server's bug report channel. Provide as much detail as possible, including steps to reproduce the issue.</li>
                    <li><strong>Suggest Features:</strong> We love hearing your ideas! Use the <code class="code-block inline-block px-2 py-1 text-sm">/suggest</code> slash command or the dedicated suggestion channel in our support server to propose new features or improvements.</li>
                </ul>
                <div class="mt-4">
                    <a href="https://nekocode.in/discord" target="_blank" class="btn-primary">
                        Join Support Server
                    </a>
                </div>
            `,
  // Updated FAQ Section with 20 FAQs and new UI
  faqs: `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Frequently Asked Questions</h2>
                <p class="text-gray-300 mb-6">
                    Here are some common questions about Neko Code. If you can't find your answer here, please visit our <a href="https://nekocode.in/discord" target="_blank" class="text-blue-400 hover:underline">support server</a>.
                </p>
                <div id="faq-accordion" class="space-y-4">
                    <!-- FAQ Item 1 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>1. What is Neko Code?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>Neko Code is a versatile Discord bot designed to enhance your server with a wide array of features, including moderation tools, fun commands, utility functions, and an in-built economy system. It aims to be an all-in-one solution for server management and community engagement.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 2 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>2. How do I invite Neko Code to my server?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>You can invite Neko Code by clicking on the official invite link: <a href="https://nekocode.in/invite" target="_blank" class="text-blue-400 hover:underline">https://nekocode.in/invite</a>. Ensure you have "Manage Server" permissions on the server you wish to add the bot to.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 3 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>3. What are the command prefixes for Neko Code?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>Neko Code supports multiple prefixes: <code class="code-block inline-block px-2 py-1 text-sm">!</code>, <code class="code-block inline-block px-2 py-1 text-sm">$</code>, <code class="code-block inline-block px-2 py-1 text-sm">?</code>, and <code class="code-block inline-block px-2 py-1 text-sm">></code>. You can use any of these before a command, for example: <code class="code-block inline-block px-2 py-1 text-sm">!balance</code> or <code class="code-block inline-block px-2 py-1 text-sm">$ping</code>.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 4 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>4. Does Neko Code support Discord Slash Commands?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>Yes, Neko Code fully supports Discord's native slash commands. Simply type <code class="code-block inline-block px-2 py-1 text-sm">/</code> in your Discord chat, and a list of available commands will appear for easy auto-completion.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 5 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>5. How can I get support or report a bug?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>For support, we recommend joining our official <a href="https://nekocode.in/discord" target="_blank" class="text-blue-400 hover:underline">Discord Support Server</a>. You can also use the <code class="code-block inline-block px-2 py-1 text-sm">/report-issue</code> slash command in your server to report bugs or <code class="code-block inline-block px-2 py-1 text-sm">/suggest</code> to propose new features.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 6 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>6. What are the main features of Neko Code?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>Neko Code offers a wide range of features including robust moderation tools, various utility commands (like server info, user info), fun and interactive games, an economy system, and unique features like token and ghost ping detectors. For a full list, please see the <a data-page-id="features" class="text-blue-400 hover:underline sidebar-link-in-content">Features</a> section.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 7 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>7. Is Neko Code free to use?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>Yes, Neko Code is completely free to use for all its core functionalities. There are no hidden fees or subscriptions required to access its main features.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 8 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>8. Can I customize Neko Code's settings for my server?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>No, at this time, we do not support customization to the bot. Keep an eye out for such <a href="https://nekocode.in/discord" target="_blank" class="text-blue-400 hover:underline">announcements</a> in the future.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 9 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>9. How often is Neko Code updated?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>We strive to update Neko Code regularly with new features, bug fixes, and performance improvements. Updates are typically rolled out weekly or bi-weekly, but critical fixes may be deployed sooner.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 10 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>10. What is the Neko Code economy system?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>The Neko Code economy system allows users to earn "Neko Coins" through various activities like daily rewards, working, or playing games. These coins can then be used to buy items from the bot's shop or interact with other economy-related commands. See the <a data-page-id="commands-prefix-economy" class="text-blue-400 hover:underline sidebar-link-in-content">Economy Commands</a> section for more.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 11 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>11. Can Neko Code play music?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>Currently, Neko Code does not offer music playback features. Our focus is on moderation, utility, and fun commands. For music, we recommend using dedicated music bots.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 12 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>12. What are "Ghost Ping Detectors"?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>Ghost Ping Detectors are a feature that identifies when a user mentions someone (pings them) and then quickly deletes the message. Neko Code will then notify the mentioned user about the ghost ping, promoting transparency in your server. More details can be found in <a data-page-id="other-features-detectors" class="text-blue-400 hover:underline sidebar-link-in-content">Other Features - Detectors</a>.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 13 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>13. How do I use the !convert command?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>The <code class="code-block inline-block px-2 py-1 text-sm">!convert</code> command is used for currency conversions. The syntax is <code class="code-block inline-block px-2 py-1 text-sm">!convert &lt;amount&gt; &lt;from_currency&gt; &lt;to_currency&gt;</code>. For example: <code class="code-block inline-block px-2 py-1 text-sm">!convert 100 USD EUR</code>. For a full list of supported currencies, please refer to the <a data-page-id="commands-prefix-math-conversion" class="text-blue-400 hover:underline sidebar-link-in-content">Math & Conversion Commands</a> section.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 14 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>14. Can I suggest new features for Neko Code?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>Yes, absolutely! We highly encourage feature suggestions. You can use the <code class="code-block inline-block px-2 py-1 text-sm">/suggest</code> slash command in your server or join our <a href="https://nekocode.in/discord" target="_blank" class="text-blue-400 hover:underline">Discord Support Server</a> and post your ideas in the dedicated suggestion channel.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 15 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>15. Is Neko Code open source?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>Neko Code is currently not open source. However, we are always transparent about our features and development process on our support server.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 16 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>16. How do I report a user misusing the bot?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>If you encounter a user misusing Neko Code, example using the <code class="code-block inline-block px-2 py-1 text-sm">/embed</code> or <code class="code-block inline-block px-2 py-1 text-sm">/confess</code> command, please report it to your server administrators. The Neko Code Team does not take responsibility for any misuse of the bot by any user.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 17 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>17. Does Neko Code collect user data?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>Neko Code collects minimal user data necessary for its functionality, such as user IDs for economy features or moderation logs. We are committed to user privacy and adhere to <a href="https://support-dev.discord.com/hc/en-us/articles/8562894815383-Discord-Developer-Terms-of-Service" target="_blank" class="text-blue-400 hover:underline"> Discord's Developer Terms of Service</a>. For more details, please refer to our bot's policy using the <code class="code-block inline-block px-2 py-1 text-sm">!policy</code> command.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 18 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>18. Can Neko Code be used in DMs?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>Most of Neko Code's commands are designed for server use and will not function in direct messages (DMs). Some utility commands might work, but the bot's full functionality is experienced within a Discord server.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 19 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>19. How do I set up auto-moderation with Neko Code?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>Neko Code offers various moderation features. While a dedicated "auto-moderation" command does not exist, features like the Token Detector and specific moderation commands (e.g., <code class="code-block inline-block px-2 py-1 text-sm">/timeout</code>, <code class="code-block inline-block px-2 py-1 text-sm">/purge</code>) can be used to set up a semi-automated moderation system. For advanced auto-moderation, consider combining Neko Code with Discord's built-in AutoMod or other specialized bots.</p>
                        </div>
                    </div>

                    <!-- FAQ Item 20 -->
                    <div class="faq-item">
                        <button class="faq-question" aria-expanded="false">
                            <span>20. Why isn't Neko Code responding to my commands?</span>
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="faq-answer">
                            <p>There could be several reasons:
                                <ul class="list-disc list-inside ml-4 mt-2">
                                    <li><strong>Incorrect Prefix:</strong> Ensure you are using one of the correct prefixes (<code class="code-block inline-block px-2 py-1 text-sm">!</code>, <code class="code-block inline-block px-2 py-1 text-sm">$</code>, <code class="code-block inline-block px-2 py-1 text-sm">?</code>, <code class="code-block inline-block px-2 py-1 text-sm">></code>) or a slash command (<code class="code-block inline-block px-2 py-1 text-sm">/</code>).</li>
                                    <li><strong>Missing Permissions:</strong> Neko Code might not have the necessary permissions in the channel or server to respond. Check its role permissions.</li>
                                    <li><strong>Bot Offline:</strong> The bot might be temporarily offline for maintenance or due to an issue. Check our <a href="https://nekocode.in/discord" target="_blank" class="text-blue-400 hover:underline">Support Server</a> for status updates.</li>
                                    <li><strong>Discord Outage:</strong> Rarely, Discord itself might be experiencing issues.</li>
                                </ul>
                                If the issue persists, please contact support on our Discord server.
                            </p>
                        </div>
                    </div>
                </div>
            `,
  "troubleshooting-guide": `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Troubleshooting Guide</h2>
                <p class="text-gray-300 mb-8">
                    Encountering issues with Neko Code? This guide provides solutions to common problems.
                </p>

                <h3 class="text-2xl font-medium text-white mb-3">Bot Not Responding</h3>
                <p class="text-gray-300 mb-6">
                    If Neko Code isn't responding to your commands, consider the following:
                    <ul class="list-disc list-inside ml-4 mt-2">
                        <li><strong>Check Bot Status:</strong> Verify if Neko Code is online in your server. If it's offline, it might be undergoing maintenance or experiencing an outage. Check our <a href="https://nekocode.in/discord" target="_blank" class="text-blue-400 hover:underline">Support Server</a> for status updates.</li>
                        <li><strong>Correct Prefix/Slash Command:</strong> Ensure you are using the correct prefix (<code class="code-block inline-block px-2 py-1 text-sm">!</code>, <code class="code-block inline-block px-2 py-1 text-sm">$</code>, <code class="code-block inline-block px-2 py-1 text-sm">?</code>, <code class="code-block inline-block px-2 py-1 text-sm">></code>) or the native slash command (<code class="code-block inline-block px-2 py-1 text-sm">/</code>). Remember, prefixes are not customizable.</li>
                        <li><strong>Bot Permissions:</strong> Neko Code needs appropriate permissions to read messages and send replies in the channel you're using it. Ensure it has "Read Message History", "Send Messages", and "Use Slash Commands" permissions at minimum.</li>
                        <li><strong>Channel Overrides:</strong> Check if there are any channel-specific permission overrides that might be preventing the bot from responding.</li>
                        <li><strong>Discord Outage:</strong> Occasionally, Discord itself might experience issues. Check <a href="https://discordstatus.com/" target="_blank" class="text-blue-400 hover:underline">Discord Status</a> for any ongoing problems.</li>
                    </ul>
                </p>
                <p class="text-gray-300 mb-8">
                
                <h3 class="text-2xl font-medium text-white mb-3">Commands Not Working as Expected</h3>
                <p class="text-300 mb-6">
                    If a command is not performing its intended function:
                    <ul class="list-disc list-inside ml-4 mt-2">
                        <li><strong>Command Syntax:</strong> Double-check the command syntax. Many commands require specific arguments or mentions. Refer to the <a data-page-id="commands-overview" class="text-blue-400 hover:underline sidebar-link-in-content">Command List Overview</a> for correct usage.</li>
                        <li><strong>User Permissions:</strong> Some commands (e.g., moderation commands) require specific user permissions (e.g., "Kick Members", "Ban Members"). Ensure you have the necessary roles.</li>
                        <li><strong>Bot's Role Position:</strong> For moderation commands, Neko Code's highest role must be above the roles of the users it is trying to moderate. Adjust role hierarchy if necessary.</li>
                        <li><strong>Rate Limits:</strong> Discord has rate limits. If you're sending too many commands too quickly, the bot might temporarily stop responding. Wait a few seconds and try again.</li>
                    </ul>
                </p>
                <p class="text-gray-300 mb-8">
                
                <h3 class="text-2xl font-medium text-white mb-3">"What to do if all else fails"</h3>
                <p class="text-gray-300 mb-6">
                    If you've tried the above steps and are still experiencing issues:
                    <ol class="list-decimal list-inside ml-4 mt-2">
                        <li><strong>Re-invite the Bot:</strong> Sometimes, a fresh re-invitation can resolve underlying permission or caching issues. You can use the invite link: <a href="https://nekocode.in/invite" target="_blank" class="text-blue-400 hover:underline">https://nekocode.in/invite</a>.</li>
                        <li><strong>Join our Support Server:</strong> The best course of action is to join our official <a href="https://nekocode.in/discord" target="_blank" class="text-blue-400 hover:underline">Discord Support Server</a>. Our team can provide personalized assistance. When reporting an issue, please include:
                            <ul class="list-disc list-inside ml-6 mt-1">
                                <li>The command you were trying to use.</li>
                                <li>The exact error message (if any).</li>
                                <li>Screenshots or video recordings of the issue.</li>
                                <li>The channel ID and server ID where the issue occurred.</li>
                                <li>Any troubleshooting steps you've already tried.</li>
                            </ul>
                        </li>
                        <li><strong>Check for Discord Server Issues:</strong> Ensure your Discord client is up to date and try restarting Discord.</li>
                    </ol>
                </p>
            `,
  changelog: `
                <h2 class="text-3xl font-semibold section-title page-heading mb-6">Changelog / Release Notes</h2>
                <p class="text-gray-300 mb-8">
                    Stay up-to-date with the latest changes, features, and bug fixes in Neko Code.<br>
                    Not sure how to use certain features? Use <code class="code-block inline-block px-2 py-1 text-sm">/help</code> command or check out our <a data-page-id="faqs" class="text-blue-400 hover:underline sidebar-link-in-content">FAQ</a> or join our <a href="https://nekocode.in/discord" target="_blank" class="text-blue-400 hover:underline">Support Server</a> for assistance.  
                </p>

                
                <div class="space-y-8">
                
                <!-- Release Card: v2.8.2 -->
                <div class="card border-l-4 border-[var(--theme-primary)]">
                    <h3 class="text-xl font-semibold text-white mb-2">Version 2.8.2</h3>
                    <span class="text-sm text-gray-400">
                        <strong>Released on:</strong> September 12, 2026 (8:21 AM)
                    </span>
                
                    <div class="mt-3">
                        <div class="changelog-tag changelog-tag-new">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                            NEW FEATURE
                        </div>
                
                        <p class="text-gray-300 mt-1">
                            <strong class="text-yellow-400">Custom Profiles System</strong><br>
                            • Introduced a complete <strong>custom profiles system</strong> — create and personalize your own profile card in the server.<br>
                            • <strong>/profile edit</strong> — opens a <strong>modal popup form</strong> to set your profile info. Choose between two sections:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;— <strong>📝 Basic Info:</strong> Display Name, Bio, Pronouns, Birthday, Favorite Color.<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;— <strong>🔗 Socials & Extras:</strong> Social Links, Custom Fields, Banner Image, Embed Theme Color.<br>
                            • <strong>/profile view [@user]</strong> — view your own or anyone else's profile as a <strong>rich embed card</strong> with avatar, bio, socials, and custom fields.<br>
                            • <strong>/profile delete</strong> — permanently delete your profile with a <strong>confirmation prompt</strong> (danger button + cancel) to prevent accidents.<br>
                            • <strong>Custom embed theme color</strong> — set your own hex color to personalize how your profile embed looks.<br>
                            • <strong>Banner image support</strong> — add a custom banner URL displayed on your profile card.<br>
                            • <strong>Flexible custom fields</strong> — add any key:value pairs (e.g., Hobby:Coding | Fav Game:Minecraft).<br>
                        </p>
                    </div>
                </div>
                
                <!-- Release Card: v2.8.1 -->
                <div class="card">
                    <h3 class="text-xl font-semibold text-white mb-2">Version 2.8.1</h3>
                    <span class="text-sm text-gray-400">
                        <strong>Released on:</strong> September 12, 2026 (4:51 AM)
                    </span>
                
                    <div class="mt-3">
                        <div class="changelog-tag changelog-tag-new">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                            NEW FEATURE
                        </div>
                
                        <p class="text-gray-300 mt-1">
                            <strong class="text-yellow-400">Leveling & XP System</strong><br>
                            • Introduced a complete <strong>leveling and XP system</strong> — earn XP by chatting in the server.<br>
                            • Users earn <strong>15–25 random XP per message</strong> with a 60-second cooldown to prevent spam.<br>
                            • <strong>Minimum message length</strong> requirement — short messages no longer earn XP.<br>
                            • Dynamic <strong>level-up announcements</strong> with tier-based colors, progress bars, and server rank.<br>
                            • Special <strong>milestone embeds</strong> for key levels (5, 10, 20, 30, 50, 75, 100) with unique emojis and colors.<br>
                            • <strong>/rank command</strong> — view your level, XP, tier, progress bar, and server rank in a rich profile embed.<br>
                            • <strong>/level-leaderboard command</strong> — view the top 10 members with podium-style formatting and server stats.<br>
                            • <strong>8-tier ranking system</strong>: 🌱 Newcomer → 🎯 Apprentice → ✨ Intermediate → ⚡ Advanced → 🔥 Expert → 🌟 Master → 💎 Diamond → 👑 Legendary.<br>
                        </p>
                    </div>
                </div>

                <!-- Release Card: v2.7.8 -->
                <div class="card">
                    <h3 class="text-xl font-semibold text-white mb-2">Version 2.7.8</h3>
                    <span class="text-sm text-gray-400">
                        <strong>Released on:</strong> March 12, 2026 (10:13 AM)
                    </span>
              
                      <div class="mt-3">
                          <div class="changelog-tag changelog-tag-new">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                              NEW FEATURE
                          </div>
                
                        <p class="text-gray-300 mt-1">
                            <strong class="text-yellow-400">Interactive Poll System</strong><br>
                            • Introduced a powerful <strong>interactive poll system</strong> using slash commands.<br>
                            • Members can <strong>vote using buttons</strong> with real-time result updates.<br>
                            • Displays <strong>live progress bars and vote counts</strong> for each option.<br>
                            • Supports <strong>timed polls</strong> with customizable durations.<br>
                            • Only the <strong>poll creator can end their poll</strong> to prevent abuse.<br>
                            • Final <strong>poll results remain visible</strong> after the poll ends.<br>
                        </p>
                    </div>
                </div>

                <!-- Release Card: v2.7.7 -->
                <div class="card">
                    <h3 class="text-xl font-semibold text-white mb-2">Version 2.7.7</h3>
                    <span class="text-sm text-gray-400">
                        <strong>Released on:</strong> February 16, 2026 (7:22 AM)
                    </span>

                      <div class="mt-3">
                          <div class="changelog-tag changelog-tag-new">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                              NEW FEATURE
                          </div>

                        <p class="text-gray-300 mt-1">
                            <strong class="text-yellow-400">AutoNick Moderation System</strong><br>
                            • Introduced a <strong>server-specific automatic nickname moderation system</strong>.<br>
                            • Automatically renames users whose usernames contain <strong>blocked keywords</strong>.<br>
                            • Uses <strong>clean, random, non-impersonating nicknames</strong> for replacements.<br>
                            • Can be <strong>enabled or disabled per server</strong> using prefix commands.<br>
                            • Admins can <strong>add, remove, and list multiple blocked keywords</strong> at once.<br>
                        </p>
                    </div>
                </div>

                    <!-- Release Card: v2.7.6 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.7.6</h3>
                        <span class="text-sm text-gray-400">
                            <strong>Released on:</strong> February 16, 2026 (7:22 AM)
                        </span>

                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                                NEW FEATURE
                            </div>

                            <p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Configurable Link Blocker System</strong><br>
                                • Introduced a <strong>server-wide link blocking system</strong> configurable by administrators.<br>
                                • Link blocking can be <strong>enabled or disabled per server</strong> using prefix commands.<br>
                                • Admins can <strong>allow specific roles</strong> to bypass link restrictions.<br>
                                • Supports both <strong>role mentions and raw role IDs</strong> for configuration.<br>
                                • Multiple roles can be <strong>added or removed in a single command</strong>.<br>
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.7.5 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.7.5</h3>
                        <span class="text-sm text-gray-400">
                            <strong>Released on:</strong> January 27, 2026 (9:45 AM)
                        </span>

                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                                NEW FEATURE
                            </div>


                            <p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Server Verification System</strong><br>
                                • Introduced a secure <strong>button-based verification system</strong> with CAPTCHA protection.<br>
                                • Admins can configure verification using <code class="code-block inline-block px-2 py-1 text-sm">/setup-verification</code>.<br>
                                • Users verify by clicking a <strong>Verify</strong> button and completing a CAPTCHA in an ephemeral modal.<br>
                                • Successfully verified users are automatically assigned the configured role.<br>
                                • Verification settings are stored persistently and applied instantly after setup.<br>
                                • Added role hierarchy and permission safety checks to prevent misconfiguration.
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.7.4 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.7.4</h3>
                        <span class="text-sm text-gray-400">
                            <strong>Released on:</strong> January 24, 2026 (11:13 AM)
                        </span>

                        <div class="mt-3">
                            <!-- NEW FEATURE -->
                            <div class="changelog-tag changelog-tag-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round" class="mr-1.5">
                                    <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                                    <path d="M15 8h6" />
                                    <path d="M18 5v6" />
                                    <path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332" />
                                </svg>
                                NEW FEATURE
                            </div>

                            <p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Ping Mods</strong><br>
                                • You can now instantly ping a moderator in your server if something seems off.<br>
                                • Moderators are configured by role and selected randomly.<br>
                                • Online moderators are preferred when available.<br>
                                • Built-in cooldowns prevent spam and abuse.<br>
                                • Managed using:
                                <code class="code-block inline-block px-2 py-1 text-sm">\$pingmods</code>,
                                <code class="code-block inline-block px-2 py-1 text-sm">\$pingmods add @Role</code>,
                                <code class="code-block inline-block px-2 py-1 text-sm">\$pingmods remove @Role</code>.
                            </p>

                            <!-- NEW FEATURE -->
                            <div class="changelog-tag changelog-tag-new mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round" class="mr-1.5">
                                    <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                                    <path d="M15 8h6" />
                                    <path d="M18 5v6" />
                                    <path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332" />
                                </svg>
                                NEW FEATURE
                            </div>

                            <p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Autorole</strong><br>
                                • Automatically assigns a role to users as soon as they join the server.<br>
                                • Only one autorole can be configured per server for clarity and consistency.<br>
                                • Safely handles missing roles and permission limitations.<br>
                                • Managed using:
                                <code class="code-block inline-block px-2 py-1 text-sm">\$autorole set @Role</code>,
                                <code class="code-block inline-block px-2 py-1 text-sm">\$autorole show</code>,
                                <code class="code-block inline-block px-2 py-1 text-sm">\$autorole remove</code>.<br>
                                📌 <strong>Note:</strong> Make sure the bot’s role is positioned
                                <strong>above the autorole</strong> in the server’s role hierarchy.
                            </p>

                            <!-- IMPROVEMENT -->
                            <div class="changelog-tag changelog-tag-improvement mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round" class="mr-1.5">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <path d="m9 11 3 3L22 4" />
                                </svg>
                                IMPROVEMENT
                            </div>

                            <p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Stability & Reliability</strong><br>
                                • Improved error handling for moderation-related commands.<br>
                                • Reduced silent failures during member joins.<br>
                                • Better handling of network timeouts and edge cases.
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.7.3 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.7.3</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> December 1, 2025 (8:50 AM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-relaunch">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M3 12a9 9 0 1 0 9-9c-.75 0-1.48.11-2.16.33L8 6"/><path d="M12 3v7l4-4"/><path d="M11 21H3"/><path d="M21 21h-8"/></svg>
                                RE-LAUNCH
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Todo Lists</strong><br>
                                • Restored global to-do system tied to user accounts.<br>
                                • You can add tasks using <code class="code-block inline-block px-2 py-1 text-sm">/todo-add</code>.<br>
                                • You can view all tasks using <code class="code-block inline-block px-2 py-1 text-sm">/todo-list</code>.<br>
                                • Tasks can now be removed easily using their index number with <code class="code-block inline-block px-2 py-1 text-sm">/todo-remove</code>.<br>
                                • The command <code class="code-block inline-block px-2 py-1 text-sm">/todo-clear</code> allows wiping the entire list at once.
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.7.2 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.7.2</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> December 1, 2025 (5:59 PM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-improvement">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                                IMPROVEMENT
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Help Command Update</strong><br>
                                • Added intelligent autocomplete support for <code class="code-block inline-block px-2 py-1 text-sm">/help</code> command.<br>
                                • Commands are now categorized into Slash Commands and Prefix Commands inside autocomplete.<br>
                                • Implemented smart sorting to prioritize closest matches first (exact → starts-with → contains → similarity).<br>
                                • Enhanced command lookup to provide detailed info for both prefix and slash commands, including usage examples.<br>
                                • Improved button handling so only the person who invoked <code class="code-block inline-block px-2 py-1 text-sm">/help</code> can interact with the menu.
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.7.1 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.7.1</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> November 26, 2025 (9:01 AM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                                NEW FEATURE
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Expose The Sus Among Us!</strong><br>
                                • Added <code class="code-block inline-block px-2 py-1 text-sm">/amongus</code> command.<br>
                                • Generates a fully animated Among Us–style ejection GIF.<br>
                                • Includes profile image rotation + smooth left-to-right motion.<br>
                                • Random outcomes: was The Imposter / was Not The Imposter.<br>
                                • Added suspense placeholder message before GIF reveal.
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.7.0 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.7.0</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> November 23, 2025 (1:05 PM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                                NEW FEATURE
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Steam Game Search!</strong><br>
                                • You can now search any Steam game directly by name using <code class="code-block inline-block px-2 py-1 text-sm">$steam game-name</code>.<br>
                                • Shows release date and general game information like price, review and genres at a glance.<br>
                                • Shows supported platforms (Windows / Mac / Linux).<br>
                                • Game prices are shown in both INR (₹) and USD ($).<br>
                                • Includes real player reviews, formatted for easy reading.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Release Card: v2.6.0 -->
                        <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.6.0</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> November 14, 2025 (11:19 AM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                                NEW FEATURE
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Chaotic Achievement System!</strong><br>
                                • Introduced a humorous achievement system triggered by everyday chat behavior.<br>
                                • Unlock funny titles for sending messages, using emojis, or being completely clueless.<br>
                                • Designed to add playful chaos and personality to user interactions.<br>
                                • Automatically tracks user actions in the background without extra commands.<br>
                                • Achievement scoreboard has been added to track your and anyone's achievements.<br> 
                                • More achievements will be added regularly to keep the fun going.
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.5.0 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.5.0</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> July 22, 2025 (10:37 PM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                                NEW FEATURE
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Custom Welcome & Goodbye Messages:</strong><br>
                                • Added support for personalized welcome and goodbye messages for your server.<br>
                                • Introduced <strong>/setwelcome</strong> and <strong>/setgoodbye</strong> commands for easy customization.<br>
                                • Allows server owners to tailor greetings to match their community style.<br>
                                • Messages trigger instantly whenever members join or leave.<br>
                                • Enhances first impressions and improves community engagement.
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.4.1 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.4.1</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> July 20, 2025 (2:36 PM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-improvement">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                                IMPROVEMENT
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Ticket System Upgrade:</strong><br>
                                • Improved the support ticket system with powerful moderation features.<br>
                                • Added ticket claiming to prevent multiple mods from handling the same ticket.<br>
                                • Implemented auto-logging for organized and reliable transcript storage.<br>
                                • Introduced mod alerts for cleaner workflow notifications.<br>
                                • Overall system stability and mod efficiency have been significantly enhanced.
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.4.0 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.4.0</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> July 13, 2025 (3:09 PM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                                NEW FEATURE
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Ticketing System Launch:</strong><br>
                                • Introduced the new ticketing support system.<br>
                                • Allows users to create tickets quickly for help or issue reporting.<br>
                                • Provides structured communication channels for support teams.<br>
                                • Helps moderators track and resolve user concerns more effectively.<br>
                                • Built as a foundation for future, more advanced ticketing features.
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.3.0 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.3.0</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> July 12, 2025 (2:16 PM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                                NEW FEATURE
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">AI Assistant Support:</strong><br>
                                • Added the <strong>$helpme</strong> command for natural-language support queries.<br>
                                • Allows users to ask questions directly and get AI-powered answers.<br>
                                • Integrated with documentation to provide accurate, context-aware help.<br>
                                • Reduces dependency on static help menus and improves user experience.<br>
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.2.2 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.2.2</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> July 6, 2025 (9:30 PM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-security">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                SECURITY UPDATE
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Alt Account Detection System:</strong><br>
                                • Introduced automated risk-based detection for suspicious alt accounts.<br>
                                • Logs flagged accounts for moderator review and future reference.<br>
                                • Helps reduce server raids, spam, and malicious user activity.<br>
                                • Sends non-intrusive alerts without disrupting server flow.<br>
                                • Strengthens moderation tools without requiring manual tracking.
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.2.1 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.2.1</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> July 6, 2025 (8:23 PM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                                NEW FEATURE
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Ghost Ping Detector:</strong><br>
                                • Added automated detection for ghost pings where users delete messages after tagging.<br>
                                • Logs incidents for moderators to track suspicious behavior.<br>
                                • Helps reduce harassment caused by stealth pinging.<br>
                                • Works silently in the background without interfering with chats.<br>
                                • Improves moderation accuracy and user protection.
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.2.0 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.2.0</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> June 27, 2025 (1:51 PM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                                NEW FEATURE
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Economy System & UX Improvements:</strong><br>
                                • Launched a full in-bot economy with balance, daily, and shop commands.<br>
                                • Added core earning features, purchases, and a user-friendly economy flow.<br>
                                • Improved UI layouts and output formatting across various commands.<br>
                                • Enhanced interaction design for a cleaner and more polished feel.<br>
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.1.0 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.1.0</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> June 21, 2025 (9:39 PM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M15 8h6"/><path d="M18 5v6"/><path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>
                                NEW FEATURE
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Web Search Integration:</strong><br>
                                • Added the <strong>/google</strong> command to perform real-time Google searches in Discord.<br>
                                • Enabled quick search access without switching apps or tabs.<br>
                                • Provides clean results formatted for easy reading.<br>
                                • Supports broader utility commands for knowledge queries.<br>
                                • Forms the basis for expanded search-related features.
                            </p>

                            <div class="changelog-tag changelog-tag-improvement">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                                IMPROVEMENT
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Enhanced Google Command:</strong><br>
                                • Added the <strong>/google</strong> videos prefix for targeted YouTube search results.<br>
                                • Allows users to quickly fetch video content directly inside Discord.<br>
                                • Streamlines media discovery without browser switching.<br>
                                • Provides cleaner and more relevant video-focused results.<br>
                                • Further improves usability of the existing search integration.
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.0.1 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.0.1</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> June 7, 2025 (11:50 AM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-security">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                SECURITY UPDATE
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Token Detection System:</strong><br>
                                • Added automated scanning to detect leaked Discord Bot/User tokens in messages.<br>
                                • Tokens sent in the chat now trigger an instant security alert to the chat.<br>
                                • A warning prompt helps users quickly respond to potential leaks.<br>
                                • Includes a “Delete Token” option for immediate removal.<br>
                                • Strengthens server safety by preventing accidental credential exposure.
                            </p>
                        </div>
                    </div>

                    <!-- Release Card: v2.0.0 -->
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-2">Version 2.0.0</h3>
                        <span class="text-sm text-gray-400"><strong>Released on:</strong> March 26, 2025 (12:20 PM)</span>
                        <div class="mt-3">
                            <div class="changelog-tag changelog-tag-relaunch">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="mr-1.5"><path d="M3 12a9 9 0 1 0 9-9c-.75 0-1.48.11-2.16.33L8 6"/><path d="M12 3v7l4-4"/><path d="M11 21H3"/><path d="M21 21h-8"/></svg>
                                RE-LAUNCH
                            </div><p class="text-gray-300 mt-1">
                                <strong class="text-yellow-400">Highlights of the Relaunch:</strong><br>
                                • Core Systems Restored.<br>
                                • Some Features Temporarily Missing.<br>
                                • Active Development Resumed.
                            </p>
                        </div>
                    </div>

            `,
};
