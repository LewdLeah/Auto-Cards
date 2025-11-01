# Auto-Cards
Made by LewdLeah ❤️
## Overview
Auto-Cards is a plug-and-play scenario script for AI Dungeon that watches your story and automatically writes plot-relevant story cards during normal gameplay. My primary goal was to address the "object permanence problem" by extending story cards and memories with deeper automation. Auto-Cards builds a living reference of your adventure's world as you go.
## Main Features
- Object permanence! (sort of)
- Simple and easy to use, full background automation allows you to focus on gameplay
- Detects named entities from your story and periodically writes new cards
- Smart long-term memory updates and summaries for important cards
- Fully customizable AI card generation and memory summarization prompts
- Suitable for both free and premium AI Dungeon users alike
- Optional in-game commands to manually direct the card generation process
- Optional in-game scripting interface (LSIv2)
- Optional API for other creators to utilize
## Permission
Auto-Cards is both free and open source for anyone to use within their own scenarios or scripts, even including published works. General-purpose usefulness and compatibility were my top design priorities. You have my full permission to use, copy, or modify Auto-Cards. Please be respectful of the fact that not everyone wants to use Auto-Cards, so never beg, demand, harass, or otherwise annoy creators about installing Auto-Cards into their scenarios. Now, please enjoy! ❤️
## Scenario Script Installation Guide
0. Please consider installing [Localized Languages](https://github.com/LewdLeah/Localized-Languages?tab=readme-ov-file#scenario-script-installation-guide) instead, it includes a superior version of Auto-Cards
1. Use the [AI Dungeon website](https://aidungeon.com/) on PC (or view as desktop if mobile-only)
2. [Create a new scenario](https://help.aidungeon.com/faq/what-are-scenarios) or edit one of your existing scenarios
3. Open the `DETAILS` tab at the top while editing your scenario
4. Scroll to the bottom and select `EDIT SCRIPTS`
5. Select the `Input` tab on the left
6. Delete all code within said tab
7. Copy and paste the following code into your empty `Input` tab:
```javascript
// Your "Input" tab should look like this
const modifier = (text) => {
  // Your other input modifier scripts go here (preferred)
  text = AutoCards("input", text);
  // Your other input modifier scripts go here (alternative)
  return {text};
};
modifier(text);
```
8. Select the `Context` tab on the left
9. Delete all code within said tab
10. Copy and paste the following code into your empty `Context` tab:
```javascript
// Your "Context" tab should look like this
const modifier = (text) => {
  // Your other context modifier scripts go here (preferred)
  [text, stop] = AutoCards("context", text, stop);
  // Your other context modifier scripts go here (alternative)
  return {text, stop};
};
modifier(text);
```
11. Select the `Output` tab on the left
12. Delete all code within said tab
13. Copy and paste the following code into your empty `Output` tab:
```javascript
// Your "Output" tab should look like this
const modifier = (text) => {
  // Your other output modifier scripts go here (preferred)
  text = AutoCards("output", text);
  // Your other output modifier scripts go here (alternative)
  return {text};
};
modifier(text);
```
14. Select the `Library` tab on the left
15. Delete all code within said tab
16. Open my full Library code (hyperlink below) in a new browser tab
- [Library code](./src/library.js)
17. Copy my *full* code from the page above and paste into your empty `Library` tab
18. Click the big yellow `SAVE` button in the top right corner
19. And you're done!
20. Keep in mind that any adventures played from your scenario will include Auto-Cards (this also applies retroactively)
## Useful Links
### Simple demo scenario
- [Auto-Cards](https://play.aidungeon.com/scenario/Ddt0Akd-lVtj/auto-cards)
### My AI Dungeon profile page
- [LewdLeah](https://play.aidungeon.com/profile/LewdLeah)
### Auto-Cards discussion thread
- [Auto-Cards script testing & feedback](https://discord.com/channels/903327676884979802/1347300413652734064/1347300413652734064)
- [AI Dungeon official Discord server invite](https://discord.gg/MXNqpSbuZT) (required to access the first link)
- Feel free to ping me anytime @LewdLeah if you'd like to chat or share ideas. But please remember this is a personal passion project for me, something I do because I enjoy it, not as a job. Your kindness, patience, and love mean so much to me~ ❤️
