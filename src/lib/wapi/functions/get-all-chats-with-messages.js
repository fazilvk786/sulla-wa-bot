/**
 * Retrieves chats with messages
 * @param {boolean} newOnly boolean
 * @param {Function} done callback
 */
export async function getAllChatsWithMessages(newOnly, done) {
  const x = [];
  if (newOnly) {
    x.push(
      WAPI.getAllChatsWithNewMsg().map((c) => WAPI.getChat(c.id._serialized))
    );
  } else {
    x.push(WAPI.getAllChatIds().map((c) => WAPI.getChat(c)));
  }
  const _result = (await Promise.all(x)).flatMap((x) => x);
  const result = JSON.stringify(_result);
  return JSON.parse(result);
}
