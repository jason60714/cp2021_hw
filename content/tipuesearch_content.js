var tipuesearch = {"pages": [{'title': 'About', 'text': '這是計算機程式課程 2021 Fall 的作業倉儲與網站 template \n \n 你的學號 40923115 \n 網站倉儲:  https://github.com/jason60714/cp2021_hw \n 網站連結:  https://jason60714.github.io/cp2021_hw/ \n 其他與個人或作業相關資料說明或介紹 \n', 'tags': '', 'url': 'About.html'}, {'title': '上課進度', 'text': '', 'tags': '', 'url': '上課進度.html'}, {'title': '上傳內容', 'text': '', 'tags': '', 'url': '上傳內容.html'}, {'title': '1007', 'text': '1.建立倉儲 \n 2.練習push \n \xa0 \xa0git version \xa0 \xa0cd tmp \xa0 \xa0cd cp2021_hw \xa0 \xa0cms \n', 'tags': '', 'url': '1007.html'}, {'title': '1014', 'text': '1.將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動 https://gist.githubusercontent.com/jason60714/8d8732335db66a2a43267956fdc4d861/raw/bc7a5ae536139d3183f1a54e435efee96bc83e0d/hw-1 2.讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動 https://gist.githubusercontent.com/jason60714/f2f9c02a305a15b689a1b81380c2a934/raw/98a85639d26d50f070e914f87952cdd2a4a036f2/hw-1-2 3.英文打字(20 min 44sec) https://gist.githubusercontent.com/jason60714/73cefa34ad4377850c48cac76cfe2759/raw/e093f3d0d0747da60e8f426a30f650899021ffc8/hw-1-3 4.中文打字(10 min 34sec) https://gist.githubusercontent.com/jason60714/4bcdff3c6c6f379704d3b1ce4259eebe/raw/5c25ebc0cce7472d1a7f5da9751e154e2838f73c/hw-1-4 \n', 'tags': '', 'url': '1014.html'}, {'title': '1018', 'text': '1.更改網站連結 \n', 'tags': '', 'url': '1018.html'}, {'title': '1024', 'text': '1.下載wink \n', 'tags': '', 'url': '1024.html'}, {'title': '1027', 'text': '1.下載shareX \n', 'tags': '', 'url': '1027.html'}, {'title': '1031', 'text': '1.學習使用wink \n', 'tags': '', 'url': '1031.html'}, {'title': '1104', 'text': '1.貪食蛇程式 <!-- 導入 brython 程式庫 --> <script src="./../cmsimde/static/brython.js"></script> <script src="./../cmsimde/static/brython_stdlib.js"></script> <!-- 啟動 Brython --> <script>// <![CDATA[ window.onload=function(){ brython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']}); } // ]]></script> <p><!-- 導入 FileSaver 與 filereader --></p> <p> <script type="text/javascript" src="./../cmsimde/static/ace/FileSaver.min.js"></script> <script type="text/javascript" src="./../cmsimde/static/ace/filereader.js"></script> </p> <p><!-- 導入 ace --></p> <p> <script type="text/javascript" src="./../cmsimde/static/ace/ace.js"></script> <script type="text/javascript" src="./../cmsimde/static/ace/ext-language_tools.js"></script> <script type="text/javascript" src="./../cmsimde/static/ace/mode-python3.js"></script> <script type="text/javascript" src="./../cmsimde/static/ace/snippets/python.js"></script> </p> <p><!-- 請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱--></p> <p> <script type="text/javascript">// <![CDATA[ function doSave(storage_id, filename){  var blob = new Blob([localStorage[storage_id]], {type: "text/plain;charset=utf-8"});  filename = document.getElementById(filename).value  saveAs(blob, filename+".py"); } // ]]></script> </p> <p><!-- 印出版次與關鍵字程式 --></p> <p> <script type="text/python3">// <![CDATA[ from browser import document as doc import ace # 清除畫布 def clear_bd(ev):  bd = doc["brython_div"]  bd.clear() # Brython 3.3.4 內建的 container 名稱為 \'container\' 且 turtle 輸出為 svg 必須使用 div 訂定 id Ace = ace.Editor(editor_id="kw_editor", console_id="kw_console", container_id="kw__container", storage_id="kw_py_src" ) # 從 gist 取出程式碼後, 放入 editor 作為 default 程式 def run():  # 利用 get 取下 src 變數值  try:  url = doc.query["src"]  except:  url = "https://gist.githubusercontent.com/40923129/c7c875305c67bde7d23c33c7284a0b23/raw/a3c01ebab29c6a75d2170717cdba954355b963de/snake"  prog = open(url).read() \n # 將程式載入編輯區  Ace.editor.setValue(prog)  Ace.editor.scrollToRow(0)  Ace.editor.gotoLine(0)  # 直接執行程式  #ns = {\'_name_\':\'_main_\'}  #exec(prog, ns)  # 按下 run 按鈕  Ace.run() \n # 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定 doc[\'kw_run\'].bind(\'click\', Ace.run) doc[\'kw_show_console\'].bind(\'click\', Ace.show_console) doc[\'kw_clear_console\'].bind(\'click\', Ace.clear_console) doc[\'clear_bd\'].bind(\'click\', clear_bd) # 呼叫函式執行 run() // ]]></script> </p> <div id="brython_div"></div> <p><!-- 用來顯示程式碼的 editor 區域 --></p> <div id="kw_editor" style="width: 600px; height: 300px;"></div> <p><!-- 以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合 --></p> <p>!-- 存擋表單開始 --&gt;</p> <form><label>Filename: <input id="kw_filename" placeholder="input file name" type="text">.py</label> <input onclick="doSave(\'kw_py_src\', \'kw_filename\');" type="submit" value="Save"></form><!-- 存擋表單結束 --> <p></p> <!-- 執行與清除按鈕開始 --> <p><button id="kw_run">Run</button> <button id="kw_show_console">Output</button> <button id="kw_clear_console">清除輸出區</button><button id="clear_bd">清除繪圖區</button><button onclick="window.location.reload()">Reload</button></p> <!-- 執行與清除按鈕結束 --> <p></p> <!-- 程式執行 ouput 區 --> <div style="width: 100%; height: 100%;"><textarea autocomplete="off" id="kw_console" style="margin: 0px; width: 485px; height: 195px;"></textarea></div> \n', 'tags': '', 'url': '1104.html'}, {'title': '1115', 'text': '期中成績 \n', 'tags': '', 'url': '1115.html'}, {'title': '1201', 'text': '貪食蛇如何避開自己身體持續吃紅點生存 \n \n 更新日期:2021/12/01 \n \n', 'tags': '', 'url': '1201.html'}, {'title': 'HW1', 'text': 'HW1 - 網際動畫與 touch typing 佔學期成績 20%. \n HW1 必須在 2021.10.20 22:00 之前完成 . \n 已回報完成 \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.10.20 22:00 關閉 \n \n 請至  https://github.com  申請 Github 帳號後, 至  https://mde.tw/cp2021/content/Task1.html \xa0 頁面, 將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動. \n 請將 1. 的程式碼存入個人 Gist 區 ( 說明 ). \n 請在 1. 的程式中, 加入與  Cango 頁面  Fourbar 程式碼相同功能的啟動按鈕, 讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動. 完成後請將程式碼存入個人 Gist 區. \n 請在 Gist 檔案編輯區, 利用鍵盤輸入  https://docs.github.com/en/github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists#about-gists  中的這段英文內容, 請利用手機計時, 大概需要多少時間? 請將此段練習打字的內容與所需時間存入 Gist 檔案中. \n 請至少練習 key in 這段英文內容三次, 然後看看是否已經了解如何透過電腦鍵盤 touch typing? \n 接下來請利用中文輸入  https://ithelp.ithome.com.tw/articles/10206233  的第一段中文說明, 請利用手機計時, 大概需要多少時間? \n \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n !-- 存擋表單開始 --> \n Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': '\n HW3 - AI 貪食蛇佔學期成績 30%. \n HW3 必須在 2021.12.22 22:00 之前完成. \n HW3 具體項目成果回報區 將於 2021.11.09 開啟, 於  2021.12.22 22:00 關閉 \n 網際貪食蛇的逆襲, 誰的 自動執行貪食蛇 能夠破紀錄? 目前直覺貪食蛇紀錄為 45 節 (除了蛇身節數外, 應該還要置入出現紅色標的物後的總完食時間). \n 手動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式的改進. \n 參考資料: \n https://mde.tw/cp2021/content/Task3.html \n Brython snake 原始來源:  https://medium.com/swlh/sick-of-javascript-just-use-browser-python-4b9679efe08b \n https://github.com/mdecourse/snake-Q-Learning \n https://towardsdatascience.com/teaching-a-computer-how-to-play-snake-with-q-learning-93d0a316ddc0 \n https://github.com/mdecourse/SnakeQlearning \n https://medium.com/@italohdc/learnsnake-teaching-an-ai-to-play-snake-using-reinforcement-learning-q-learning-b63ac23dfdd1 \n https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36 \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://www3.hs-albsig.de/wordpress/point2pointmotion/2020/10/09/deep-reinforcement-learning-with-the-snake-game/ \n 2016_Exploration of Reinforcement Learning to SNAKE.pdf \n train_a_snake_with_reinforceme.pdf \n https://medium.com/@hugo.sjoberg88/using-reinforcement-learning-and-q-learning-to-play-snake-28423dd49e9b \n https://github.com/mdecourse/Snake-Reinforcement-Learning \n Autonomous-Agents-in-Snake-Game-via-Deep-Reinforcement-Learning.pdf \n 延伸應用: \n \n \n \n \n https://github.com/mdecourse/snake-ai-pytorch \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 30% \n Final Project 必須在 2022.01.05 22:00 之前完成 . \n Final Project 具體項目成果回報區 將於 2021.11.09 開啟, 於  2022.01.05 22:00 關閉 \n 利用 Brython 寫一個會 令人想玩 的網際遊戲. \n 參考章節: \n \n 專題摘要 \n 資料蒐集 \n 設計動機 \n 設計方法 \n 結果與討論 \n 附錄 \n \n 參考資料: \n https://github.com/collections/web-games \n https://github.com/topics/web-game \n https://github.com/topics/browser-game \n https://github.com/leereilly/games \n https://bmsleight.github.io/brython-blocks/ \n https://github.com/mdecourse/brython-blocks', 'tags': '', 'url': 'Final Project.html'}]};