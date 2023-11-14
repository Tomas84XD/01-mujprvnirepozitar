
const generateQuote = function() {
    const quotes = [
    {
        quote: "„Skutečná hloupost pokaždé porazí umělou inteligenci.“ — Terry Pratchett"
    },
    {
        quote: "„Mír neohrožují zbraně jako takové, ale lidé, kteří je konstruují, instalují a jsou ochotni je použít.“ — Václav Havel"
    },
    {
        quote: "„Život je jako jízda na kole. Abyste udrželi balanc, musíte se neustále pohybovat dopředu.“ — Albert Einstein"
    },
    {
        quote: "„Kdo se nebojí života, nebojí se ani smrti.“ — Arthur Schopenhauer"
    },
    {
        quote: "„Náš život je takový, jakým ho učiní naše myšlenky.“ — Marcus Aurelius"
    },
    {
        quote: "„Umění žít není umění hrát s dobrou kartou, ale umění sehrát se špatnou kartou dobrou hru.“ —  Robert Louis Stevenson",
    },
    {
        quote: "„Raději bych byl kladivem než kovadlinou.“ —  Erwin Rommel",
    },
    {
        quote: "„Nejšťastnější je ten, kdo má nejméně žádostí.“ —  Buddha",
    },
    {
        quote: "„Jinoch se stává mužem, když obejde kaluž, místo aby do ní vstoupil.“ —  Platón",  
    },
    {
        quote: "„Když procházíš peklem, nezastavuj se.“ —  Winston Churchill"
    },
    {
        quote: "„This Morning I Woke Up Today In This Morning“. — Hayden Jang"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
 

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}
