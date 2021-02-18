module.exports = (app) => {
  app.message("pet bio", ({ say }) => {
    say({
      attachments: [
        {
          color: "#44c7f2",
          blocks: [
            {
              type: "header",
              text: {
                type: "plain_text",
                text: "Winry (she/her)",
                emoji: true,
              },
            },
            {
              type: "section",
              text: {
                text: `• I ate a banana peel once when Greg wasn't looking. I was totally fine.
• I have heterochromia - one eye is solid blue but the other is half blue, half brown.
• I am named after after Winry Rockbell from the anime Fullmetal Alchemist.`,
                type: "mrkdwn",
              },
            },
            {
              type: "context",
              elements: [
                {
                  type: "mrkdwn",
                  text: "*Person:* Greg Walker",
                },
              ],
            },
            {
              type: "image",
              image_url: "https://i.imgur.com/2eYHfWa.jpeg",
              alt_text: "Winry",
            },
          ],
        },
      ],
    });
  });
};
