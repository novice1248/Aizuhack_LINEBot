// get-content.jsファイルを読み込み
import { getContent } from '../../save-file.js';

// イメージを処理する関数
export const imageEvent = async (event, appContext) => {
  // 返信するメッセージを作成
  const message = {
    type: 'text',
    text: '画像を受け取りました！',
  };
  // ファイルを保存する
  const stream = await getContent(appContext.lineClient, event.message.id);
  await appContext.contentFileDownloader({
    stream, fileName: `${event.message.id}.jpg`, appContext, contentType: 'image/jpeg',
  });
  // 関数の呼び出し元（index）に返信するメッセージを返す
  return message;
};