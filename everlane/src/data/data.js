const data = [
    {
        id: "long-puff-dress",
        name: "Long Puff Dress",
        brand: "Olivia",
        gallery: [
            "https://m.media-amazon.com/images/I/81-xqvTXSXL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71EzKY2k6jL._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71FFlMGPg2L._AC_SY879._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81pEvmB3uEL._AC_SY879._SX._UX._SY._UY_.jpg"
        ],
        price: {
            amount: 2500,
            label: '₹'
        },
    },
    {
        id: "summer-maxi-dress",
        name: "Summer Maxi Dress",
        brand: "Guppi",
        gallery: [
            "https://m.media-amazon.com/images/I/61GVIWVvrnL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71hJSTRZp7L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/7189URm3w0L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81ldzFmxDEL._AC_UY879_.jpg"
        ],
        price: {
            amount: 2400,
            label: '₹'
        }
    },
    {
        id: "pink-casual-dress",
        name: "Pink Dress",
        brand: "Guppi",
        gallery: [
            "https://m.media-amazon.com/images/I/71eWo7wh0YL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71Dfl4+myvL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71f1+qu5q3L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71dv+SAcLzL._AC_UY879_.jpg"
        ],
        price: {
            amount: 2350,
            label: '₹'
        }
    },
    {
        id: "summer-midi-puff-dress",
        name: "Summer Midi Puff Dress",
        brand: "Lasio",
        gallery: [
            "https://m.media-amazon.com/images/I/61Gm5oBtjDL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/616Bs65KJ6L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/611RoAUUzJL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/7165z3tHLEL._AC_UY879_.jpg"
        ],
        price: {
            amount: 2300,
            label: '₹'
        }
    },
    {
        id: "maxi-dress",
        name: "Maxi Dress",
        brand: "Guppi",
        gallery: [
            "https://m.media-amazon.com/images/I/71iiyTWa-GL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/810colaJGbL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81SMidXPIwL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71YAMbRPZNL._AC_UY879_.jpg"
        ],
        price: {
            amount: 2250,
            label: '₹'
        }
    },
    {
        id: "silky-v-neck-dress",
        name: "Silky V-Neck Dress",
        brand: "Olivia",
        gallery: [
            "https://m.media-amazon.com/images/I/61haHwpHRwL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71WfilCS0JL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61k0x3ZRk4L._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61U4KLftiSL._AC_UY879_.jpg"
        ],
        price: {
            amount: 2200,
            label: '₹'
        }
    },
    {
        id: "swing-midi-dress",
        name: "Swing Midi Dress",
        brand: "Guppi",
        gallery: [
            "https://m.media-amazon.com/images/I/61DgvomHoPL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71bVsFKlZVL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71EJzQCRrSL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71ICGZCQlIL._AC_UY879_.jpg"
        ],
        price: {
            amount: 2150,
            label: '₹'
        }
    },
    {
        id: "backless-black-dress",
        name: "Backless Black Dress",
        brand: "Caty",
        gallery: [
            "https://m.media-amazon.com/images/I/61cO+pSei9L._AC_UX679_.jpg",
            "https://m.media-amazon.com/images/I/41Q0HUB3P+L._AC_.jpg",
            "https://m.media-amazon.com/images/I/51UK2MyNOvL._AC_.jpg"
        ],
        price: {
            amount: 2100,
            label: '₹'
        }
    },
    {
        id: "ruched-knit-dress",
        name: "Ruched Knit Dress",
        brand: "Caty",
        gallery: [
            "https://m.media-amazon.com/images/I/610pt5cGOxL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71f+YmM-LrL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71Nf3wCg6ML._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/710CwRVxtnL._AC_UY741_.jpg"
        ],
        price: {
            amount: 2050,
            label: '₹'
        }
    },
    {
        id: "mini-taliah-dress",
        name: "Mini Taliah Dress",
        "brand": "Olivia",
        "gallery": [
            "https://m.media-amazon.com/images/I/61IPIo8kZjL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61AkHRB2s5L._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/61uISQr80tL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/61-mtUpSKFL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/61hoiW-vbmL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/618K7EMaDgL._AC_UY741_.jpg"
        ],
        price: {
            amount: 2000,
            label: '₹'
        }
    },
    {
        id: "elsa-lady-dress",
        name: "Elsa Lady Dress",
        brand: "Natalie",
        gallery: [
            "https://m.media-amazon.com/images/I/811BGPP2vkL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71WtudNXwZL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71GBenH+ofL._AC_UY741_.jpg"
        ],
        price: {
            amount: 1950,
            label: '₹'
        }
    },
    {
        id: "kamali-dress",
        name: "Kamali Dress",
        brand: "Natalie",
        gallery: [
            "https://m.media-amazon.com/images/I/81qEc5d531L._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81kWKHkFNWL._AC_UX569_.jpg"
        ],
        price: {
            amount: 1900,
            label: '₹'
        }
    },
    {
        id: "gillian-dress",
        name: "Gillian Dress",
        brand: "Olivia",
        gallery: [
            "https://m.media-amazon.com/images/I/719OV+Mm8KL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/61tteboPb2L._AC_UX569_.jpg"
        ],
        price: {
            amount: 1850,
            label: '₹'
        }
    },
    {
        id: "backless-brown-dress",
        name: "Backless Brown Dress",
        brand: "Caty",
        gallery: [
            "https://m.media-amazon.com/images/I/51bhHAFIO0L._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61d5MxHCZXL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61P7+iw+i0L._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61WMo2Nx9TL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        price: {
            amount: 1800,
            label: '₹'
        }
    },
    {
        id: "picnic-ready-dress",
        name: "Picnic Ready Dress",
        brand: "Olivia",
        gallery: [
            "https://m.media-amazon.com/images/I/81LoGS3GLHL._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/812FCJqRdCL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/81hVBjMga7L._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71P3NsDp1PL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/71-CXDtCaRL._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/910eL0uWB1L._AC_UY741_.jpg"
        ],
        price: {
            amount: 1750,
            label: '₹'
        }
    },
    {
        id: "midi-cocktail-dress",
        name: "Midi Cocktail Dress",
        brand: "Olivia",
        gallery: [
            "https://m.media-amazon.com/images/I/819HjEqtEZS._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/81W9ZvPB8MS._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/81+C+ThLulS._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/A1nUjkm-OTS._AC_UY741_.jpg",
            "https://m.media-amazon.com/images/I/919VlqQUt3S._AC_UY741_.jpg"
        ],
        price: {
            amount: 1700,
            label: '₹'
        }
    },
    {
        id: "tank-midi-dress",
        name: "Tank Midi Dress",
        brand: "Guppi",
        gallery: [
            "https://m.media-amazon.com/images/I/71JWb3NiBZS._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/71WSsCjWS6S._AC_UX569_.jpg"
        ],
        price: {
            amount: 1650,
            label: '₹'
        }
    },
    {
        id: "neon-dress",
        name: "Neon Dress",
        brand: "Caty",
        gallery: [
            "https://m.media-amazon.com/images/I/51OAQMaQ59L._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/715J4UfeimL._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61qHQhsuCRL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        price: {
            amount: 1600,
            label: '₹'
        }
    },
    {
        id: "aerin-wrap-dress",
        name: "Aerin Wrap Dress",
        brand: "Lasio",
        gallery: [
            "https://m.media-amazon.com/images/I/716WUMQGbkL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71-dysWFpoL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81fOm-dSH7L._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71jpZxbF-GL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        price: {
            amount: 1550,
            label: '₹'
        }
    },
    {
        id: "sweetheart-dress",
        name: "Sweetheart Dress",
        brand: "Guppi",
        gallery: [
            "https://m.media-amazon.com/images/I/71bykh41wNL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61SfkU2uGrL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71oDJHvBVNL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71qD3VqyzYL._AC_SY741._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/71UtqXa3uYL._AC_SY741._SX._UX._SY._UY_.jpg"
        ],
        price: {
            amount: 1500,
            label: '₹'
        }
    },
    {
        id: "chiffon-a-line-dress",
        name: "Chiffon A-Line Dress",
        brand: "Olivia",
        gallery: [
            "https://m.media-amazon.com/images/I/81WiDnudBqS._AC_UY879_.jpg",
            "https://m.media-amazon.com/images/I/71O28lJeErS._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81cz25SPiRS._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81cBHIcEZDS._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/81Pzb-CnR3S._AC_UX569_.jpg",
            "https://m.media-amazon.com/images/I/916kjDewRYS._AC_UX569_.jpg"
        ],
        price: {
            amount: 1450,
            label: '₹'
        }
    },
    {
        id: "flora-dress",
        name: "Flora Dress",
        brand: "Guppi",
        gallery: [
            "https://m.media-amazon.com/images/I/81PYRf2EFjL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/814OaTfRy2L._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91+bwz7YeTL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/91gSGfxL-IL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81CZaqgtBPL._AC_SX569._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/81CZaqgtBPL._AC_SX569._SX._UX._SY._UY_.jpg"
        ],
        price: {
            amount: 1400,
            label: '₹'
        }
    },
    {
        id: "green-dress",
        name: "Green Dress",
        brand: "Olivia",
        gallery: [
            "https://m.media-amazon.com/images/I/61uNo+tr3QS._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61lJ1esNJCS._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/616bn88Oa2S._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61SDGztoyvS._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61SDGztoyvS._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61k1+R0v4iS._AC_SX679._SX._UX._SY._UY_.jpg",
            "https://m.media-amazon.com/images/I/61KJqMh2HTS._AC_SX679._SX._UX._SY._UY_.jpg"
        ],
        price: {
            amount: 1350,
            label: '₹'
        }
    },

]

export default data