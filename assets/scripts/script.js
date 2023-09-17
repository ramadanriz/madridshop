const menus = [
    {
        link: "#kits",
        content: "kits"
    },
    {
        link: "#training",
        content: "training"
    },
    {
        link: "#accessories",
        content: "accessories"
    }
]

const kits = [
    {
        image: 'assets/images/home_shirt.webp',
        name: 'Mens Home Authentic Shirt 23/24 White',
        price: '€150.00',
        tag: 'customize'
    },
    {
        image: 'assets/images/away_shirt.webp',
        name: 'Mens Away Authentic Shirt 23/24 Navy',
        price: '€150.00',
        tag: 'customize'
    },
    {
        image: 'assets/images/third_shirt.webp',
        name: 'Mens Third Authentic Shirt 23/24 Black',
        price: '€150.00',
        tag: 'customize'
    },
    {
        image: 'assets/images/gk_shirt.webp',
        name: 'Mens Goalkeeper Shirt 23/24 Green',
        price: '€100.00',
        tag: 'customize'
    },
    {
        image: 'assets/images/home_short.webp',
        name: 'Mens Home Authentic Shorts 23/24 White',
        price: '€55.00',
        tag: 'customize'
    },
    {
        image: 'assets/images/third_short.webp',
        name: 'Mens Third Authentic Shorts 23/24 Black',
        price: '€55.00',
        tag: 'customize'
    },
    {
        image: 'assets/images/home_socks.webp',
        name: 'Home Socks 23/24 White',
        price: '€23.00',
        tag: 'customize'
    },
    {
        image: 'assets/images/away_socks.webp',
        name: 'Home Socks 23/24 Navy',
        price: '€23.00',
        tag: 'customize'
    },
    {
        image: 'assets/images/third_socks.webp',
        name: 'Home Socks 23/24 Black',
        price: '€23.00',
        tag: 'customize'
    },
]

const trainings = [
    {
        image: 'assets/images/tracksuit.webp',
        name: 'adidas Mens Training Tracksuit Jacket 23/24 White',
        price: '€85.00'
    },
    {
        image: 'assets/images/sweatshirt.webp',
        name: 'adidas LFSTLR Mens Sweatshirt 23/24 Gold',
        price: '€90.00'
    },
    {
        image: 'assets/images/jacket.webp',
        name: 'adidas Mens UCL Training All Weather Jacket 23/24 Carbon',
        price: '€100.00'
    },
    {
        image: 'assets/images/shirt.webp',
        name: 'adidas LFSTLR Mens Third Shirt 23/24 Black',
        price: '€110.00'
    },
    {
        image: 'assets/images/polo.webp',
        name: 'adidas Mens Training Polo 23/24 White',
        price: '€50.00'
    },
    {
        image: 'assets/images/pant.webp',
        name: 'adidas LFSTLR Mens Woven Pant 23/24 Black',
        price: '€70.00'
    },
    {
        image: 'assets/images/shorts.webp',
        name: 'adidas Mens Pro UCL Training Shorts 23/24 Black',
        price: '€75.00'
    },
]

const accessories = [
    {
        image: 'assets/images/cap.jpg',
        name: 'Crest Cap Brown',
        price: '€25.00',
        description: 'The perfect gift for a true fan! Dare to surprise your favorite person with an elegant complement from Real Madrid. Measures: 26x18x13cm. Details • Ultralight • Inside: anti-sweat reinforcement strip. • Embroidered logo Real Madrid • Material: Acrylic 100%.'
    },
    {
        image: 'assets/images/backpack.webp',
        name: 'Adaptable Backpack White/Gold',
        price: '€75.00',
        description: "Details • Adaptable to Backpack Trolley. • Side bottle pockets. • With two large compartments. • Double puller on main zippers for easy opening. • Ergonomic and padded shoulder straps and back. • Handle at the top. • Measurements: 44 x 32 x 16cm."
    },
    {
        image: 'assets/images/bottle.webp',
        name: 'Steel Bottle 550ml Black',
        price: '€20.00',
        description: "Black stainless steel bottle Real Madrid 550ml. Measures: 6,5 x 6,5 x 21,8 cm."
    },
    {
        image: 'assets/images/headphone.webp',
        name: 'Real Madrid Bluetooth Headphones White',
        price: '€40.00',
        description: "Up to 15 metres. Features a button that allows you to connect to the virtual assistant. Lithium polymer battery, dimension 55253.5(mm), battery volume 250mah, 0.925wah, battery weight 5.8g. Working time around 10 hours, charging time 2.5 hours (maximum), standby time 360 hours."
    },
]

const footerMenus = [
    {
        name: 'Shopping',
        list: ['Purchase', 'Payment Methods', 'Shipping', 'Gift Card']
    },
    {
        name: 'Help',
        list: ['Contact us', 'Registration', 'Online help']
    },
    {
        name: 'Information',
        list: ['About us', 'Terms and conditions', 'Privacy', 'Cookie Policy']
    },
    {
        name: 'Payments',
        image: 'assets/images/accepted_payment.png'
    },
]

// top menu
const ul = document.querySelector("#top_nav")
menus.forEach(menu => {
    const link = document.createElement('a')
    link.setAttribute('href', `${menu.link}`)
    link.innerText = `${menu.content}`
    const li = document.createElement('li')
    li.appendChild(link)
    ul.appendChild(li)
})

// kits
const kitsContainer = document.querySelector(".kits")
kits.forEach(kit => {
    // layer element
    const layer = document.createElement('div')
    layer.setAttribute('class', 'layer')

    // image
    const image = document.createElement('img')
    image.setAttribute('src', `${kit.image}`)
    image.setAttribute('alt', `${kit.name}`)

    // tag
    const h1 = document.createElement('h1')
    h1.innerText = `${kit.tag}`

    // line
    const hr = document.createElement('hr')

    // name
    const h2 = document.createElement('h2')
    h2.innerText = `${kit.name}`

    // price
    const h4 = document.createElement('h4')
    h4.innerText = `${kit.price}`

    layer.append(image, h1, hr, h2, h4)
    kitsContainer.appendChild(layer)
})

// training
const trainingsContainer = document.querySelector('.training')
trainings.forEach(training => {
    // layer element
    const layer = document.createElement('div')
    layer.setAttribute('class', 'layer')

    // image
    const image = document.createElement('img')
    image.setAttribute('src', `${training.image}`)
    image.setAttribute('alt', `${training.name}`)

    // line
    const hr = document.createElement('hr')

    // name
    const h2 = document.createElement('h2')
    h2.innerText = `${training.name}`

    // price
    const h4 = document.createElement('h4')
    h4.innerText = `${training.price}`

    layer.append(image, hr, h2, h4)
    trainingsContainer.appendChild(layer)
})

const accessoriesContainer = document.querySelector('.accessories')
accessories.forEach(accessory => {
    // layer element
    const layer = document.createElement('div')
    layer.setAttribute('class', 'layer')
    
    // image
    const image = document.createElement('img')
    image.setAttribute('src', `${accessory.image}`)
    image.setAttribute('alt', `${accessory.name}`)

    // line
    const hr = document.createElement('hr')

    // name
    const h2 = document.createElement('h2')
    h2.innerText = `${accessory.name}`

    // description
    const p = document.createElement('p')
    p.innerText = `${accessory.description}`

    // price
    const h4 = document.createElement('h4')
    h4.innerText = `${accessory.price}`

    layer.append(image, hr, h2, p, h4)
    accessoriesContainer.appendChild(layer)
})

// footer
const footer = document.querySelector('footer')
footerMenus.forEach(menu => {
    // menu container
    const menuContainer = document.createElement('div')
    menuContainer.setAttribute('class', 'menu')

    // h2
    const h2 = document.createElement('h2')
    h2.innerText = menu.name

    // list & image
    const ul = document.createElement('ul')
    const image = document.createElement('img')

    if(menu.name == 'Payments') {
        image.setAttribute('src', `${menu.image}`)
        image.setAttribute('alt', 'payment')
        menuContainer.append(h2, image)
    } else {
        menu.list.forEach(list => {
            const li = document.createElement('li')
            li.innerText = `${list}`
            ul.appendChild(li)
        })

        menuContainer.append(h2, ul)
    }
    footer.appendChild(menuContainer)
})

// hide show aside
const asideArticle = document.querySelector('.profile')
let display = 0

function hideShow() {
    if(display == 0) {
        asideArticle.style.marginRight = "0"
        display = 1
    } else {
        asideArticle.style.marginRight = "-250px"
        display = 0
    }
}

// smooth scroll
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')  &&  location.hostname == this.hostname ) {
        let target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        if (target.length) {
            event.preventDefault()
            $('html, body').animate({scrollTop: target.offset().top}, 1000, function() {
                let $target = $(target)
                $target.focus()
                if ($target.is(":focus")) {
                    return false
                } else {
                    $target.attr('tabindex','-1')
                    $target.focus()
                }
            })
        }
    }
})