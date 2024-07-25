import "./App.css";

function App() {
  return (
    <div className="flex items-center w-full">
      <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#f4f4f4] dark:bg-token-main-surface-secondary">
        <div className="flex items-end gap-1.5 md:gap-2">
          <div>
            <div className="flex flex-col">
              <input
                multiple
                type="file"
                tabIndex="-1"
                className="hidden"
                style={{ display: "none" }}
              />
              <button
                type="button"
                id="radix-:rc:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
                className="inline-flex items-center justify-center w-0 h-0 gap-1 p-0 m-0 text-sm leading-none bg-transparent border border-transparent border-none rounded-lg outline-none cursor-pointer text-token-text-primary dark:transparent dark:bg-transparent hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-state-active:text-token-text-secondary radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent"
              ></button>
              <button
                className="flex items-center justify-center h-8 w-8 rounded-full text-token-text-primary focus-visible:outline-black dark:text-white dark:focus-visible:outline-white mb-1 ml-1.5"
                aria-disabled="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v6a5 5 0 0 0 10 0V7a3 3 0 1 0-6 0v8a1 1 0 1 0 2 0V9a1 1 0 1 1 2 0v6a3 3 0 1 1-6 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:re:"
                data-state="closed"
              ></div>
            </div>
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <textarea
              id="prompt-textarea"
              tabIndex="0"
              data-id="root"
              dir="auto"
              rows="1"
              placeholder="Message ChatGPT"
              className="m-0 resize-none border-0 bg-transparent px-0 text-token-text-primary focus:ring-0 focus-visible:ring-0 max-h-[25dvh] max-h-52"
              style={{ height: "40px", overflowY: "hidden" }}
            ></textarea>
          </div>
          <button
            disabled
            data-testid="send-button"
            className="mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
              className="icon-2xl"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
