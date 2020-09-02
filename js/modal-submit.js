 (() => {
        document
          .querySelector(".js-speaker-modal")
          .addEventListener("submit", (y) => {
            y.preventDefault();

            new FormData(y.currentTarget).forEach((value, name) =>
              console.log(`${name}: ${value}`)
            );
            y.currentTarget.reset();
          });
      })();