const places = [
    {
        "img": "./img/Med plus.jpeg",
        "name": "Med-Plus Kodungaiyur",
        "description": "Medplus in Chennai is one of the leading businesses in the Chemists. Also known for Chemists, Chemist Home Delivery, Baby Care Product Dealers, Hearing Aid Dealers, Condom Dealers, Beauty Product Dealers, Surgical Instrument Dealers, Skin Care Product Dealers and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Medplus, Chennai.",
        "specialities": ["Delivery", "In-store shopping", "Same-day delivery","LGBTQ+ friendly","Credit cards", "Debit cards", "Google Pay", "Mobile Wallets" ]
      },
    {
        "img": "./img/madhavaram Botanical garden.jpg",
        "name": "Madhavaram Botanical garden",
        "description": "Madhavaram Botanical Garden in Madhavaram Milk Colony, Chennai . Prepare to be enchanted by the beauty of Madhavaram Botanical Garden in Chennai. Let's explore what makes this botanical garden so special and what you can look forward to during your visit. As you step into Madhavaram Botanical Garden in Madhavaram Milk Colony, you will instantly feel its tranquility and understand why it is a beloved spot. Whether you are a resident or a traveler, Madhavaram Botanical Garden is a must-visit destination in Chennai.",
        "specialities": ["Wheelchair-accessible car park", "Wheelchair-accessible entrance","On-site services","Picnic tables", "Public restroom", "Slides", "Swings","Good for kids", "Good for kids birthday", "Playground" ]
      },
    {
        "img": "./img/college.jpg",
        "name": "Thiruthangal Nadar College",
        "description": "Thiruthangal Nadar College (Tamil:) is an Arts and Science college in the Kodungaiyur neighborhood of Chennai, Tamil Nadu, India. It was established in 1997 as a college for men was upgraded as a co-educational institution in 2002. It is a self-financing institution affiliated to the University of Madras.",
        "specialities": [
            "Tamil",
            "English",
            "Mathematics",
            "Computer science",
            "Computer applications",
            "Physics",
            "Chemistry",
            "Commerce",
            "Management sciences",
            "Accounting Finance & Bank Management",
            "Criminology and Police Administration",
            "Department of Library",
            "Department of Physical Education"
          ]
          },
    {
        "img": "./img/apple.jpg",
        "name": "Apple Supermarket",
        "description": "Apple Super Market in Muthamil Nagar-Kodungaiyur, Chennai . Apple Super Market in Chennai is one of the leading businesses in the Departmental Stores. Also known for Supermarkets, Departmental Stores, Provision Stores, Provision Function Wholesalers, Rice Retailers, Organic Food Retailers, Supermarkets Home Delivery, Soft Drink Retailers and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Apple Super Market, Chennal",
        "specialities": [
            "No-contact delivery", "Delivery", "Same-day delivery", "Credit cards", "Debit cards", "Mobile Wallets"
        ]
    },
    {
        "img": "./img/ceelam.png",
        "name": "CEELAM GRAND - BANQUET HALL",
        "description": "Ceelam Hall The Ceelam Hall is conveniently located in the most approachable location of M.R.Nagar,Chennai. We have beautifully decorated ballroom that can accommodate any event. The Ceelam Banquet Hall is one of the most elegant venues. It offers banquet rental services for occasions like wedding receptions, engagement parties, business meetings, bridal showers, baby showers, bachelor/stag parties, anniversary parties, birthday parties, conferences and corporate events, baptisms/christenings, Etc.",
        "specialities": [
            "Wheelchair-accessible car park", "Wheelchair-accessible entrance",
            "On-site services", "Online appointments",
            "Good for kids birthday",
            "Free parking lot", "Valet parking"
          ]
          },
]

      
function createDomStructure(district) {
    const body = document.createElement("body");

    const header = document.createElement("header");
    header.textContent = district.name;

    const section = document.createElement("section");

    const sideDiv = document.createElement("div");
    sideDiv.classList.add("side");

    const img = document.createElement("img");
    img.src = district.img;
    img.alt = "ch";

    sideDiv.appendChild(img);

    const sideRightDiv = document.createElement("div");
    sideRightDiv.classList.add("side", "right");

    const aboutHeader = document.createElement("h1");
    aboutHeader.textContent = "About";

    const aboutParagraph = document.createElement("p");
    aboutParagraph.textContent = district.description;

    const keySpecialitiesHeader = document.createElement("h1");
    keySpecialitiesHeader.textContent = "Key Specialities";

    const ul = document.createElement("ul");
    const spls = district.specialities;
    for (let i = 0; i < spls.length; i++) { 
        const li1 = document.createElement("li");
        li1.textContent = spls[i];
        ul.append(li1);
    }
    sideRightDiv.append(aboutHeader, aboutParagraph, keySpecialitiesHeader, ul);
    section.append(sideDiv, sideRightDiv);
    body.append(header, section);

    document.body.replaceWith(body);  
}

   
      