    let jokes = [
        "Why dont scientists trust atoms? Because they make up everything!",
        "Why did the math book look sad? Because it had too many problems.",
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why dont some couples go to the gym? Because some relationships dont work out.",
        "Why did the computer go to the doctor? Because it had a virus!",
        "How does a penguin build its house? Igloos it together!",
        "Why was the JavaScript developer sad? Because he didnt Node how to Express himself!",
        "Why did the coffee file a police report? It got mugged!",
        "Why do Java developers wear glasses? Because they cant C#.",
        "What do you call fake spaghetti? An impasta!",
        "Why can't you trust stairs? They're always up to something.",
        "Why did the bicycle fall over? It was two-tired.",
        "How does a snowman get around? By riding an 'icicle'.",
        "Why dont oysters share their pearls? Because theyre shellfish!",
        "Why was six afraid of seven? Because seven eight nine!",
        "What do you get when you cross a vampire and a snowman? Frostbite.",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        "Why dont skeletons fight each other? They dont have the guts.",
        "What do you call cheese that isn't yours? Nacho cheese!"
      ];
    let randomNumber = Math.floor(Math.random() * 21);
    document.getElementsByTagName("div")[0].innerHTML = `<b>${jokes[randomNumber]}</b>`
