export const getText = (req, res) => {
    const texts = [
        "Employee earn and get taxed, and they try to live on what is left. A corporation earns, spends everything it can, and is taxed on anything that is left. It's one of the biggest legal tax loopholes that the rich use.",
        "You only filled me with despair, by showing love that wasn't there. Just like the desert shows a thirsty man a green oasis when there's only sand, you lured me into something I should have dodged. Oh, the love I saw in you was just a mirage.",
        "The scent of pine is overwhelming as you enter the next room to find yourself in a forest full of evergreen trees. Only these trees are not green but bright and white, luminous in the darkness surrounding them.",
        "Achilles will never overtake the tortoise. He must first reach the place from which the tortoise started. By that time the tortoise will have got some way ahead. Achilles must then make up that, and again the tortoise will be ahead. He is always coming nearer, but he never makes up to it.",
        "Quite and willing to do whatever anyone else wanted, she was often favorably compared to a shadow."
    ]
    const text = texts[Math.floor(Math.random()*texts.length)];
    res.status(200).send(text);
}