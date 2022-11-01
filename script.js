$(() => {
  const CIRCLE_COUNT = 100;
  for (let i = 1; i <= CIRCLE_COUNT; i++)
    $(".content").append(
      `<div class="box" style="background-color: #${Math.floor(
        Math.random() * 16777215
      ).toString(16)}"></div>`
    );
});
