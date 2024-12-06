# Ex04 Places Around Me
# Date: 27/11/2024
# AIM
To develop a website to display details about the places around my house.

# DESIGN STEPS
## STEP 1
Create a Django admin interface.

## STEP 2
Download your city map from Google.

## STEP 3
Using <map> tag name the map.

## STEP 4
Create clickable regions in the image using <area> tag.

## STEP 5
Write HTML programs for all the regions identified.

## STEP 6
Execute the programs and publish them.

# CODE
## map.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Map</title>
    <style>
        * {
            margin: 0px;
            padding: 0px;
            font-family: 'Courier New', Courier, monospace;

        }

        h2 {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: aliceblue;
            background-color: black;
        }

        .img {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
        }

        header {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            width: 100%;
            background-color: black;
            color: aliceblue;
            height: 60px;
            margin-top: -50px;

        }
    </style>
</head>
<header>
    <h2>Near By Area : Kodungaiyur</h2>
    <div style="width: 150px;">
        <h4>Abdul Rasak N </h4>
        <h4>24002896</h4>
    </div>

</header>


<div class="img">

    <img src="./imgMap.png" alt="home" usemap="#imageMap">
    <map name="imageMap">
        <area target="_blank" alt="Med-Plus Kodungaiyur" title="Med-Plus Kodungaiyur"
            href="./places.html?place=Med-Plus Kodungaiyur" coords="530,447,914,569" shape="rect">
        <area target="_blank" alt="Madhavaram Botanical garden" title="Madhavaram Botanical garden"
            href="./places.html?place=Madhavaram Botanical garden" coords="377,35,579,212" shape="rect">
        <area target="_blank" alt="Thiruthangal Nadar College" title="Thiruthangal Nadar College"
            href="./places.html?place=Thiruthangal Nadar College" coords="866,196,1144,300" shape="rect">
        <area target="_blank" alt="Apple Supermarket" title="Apple Supermarket"
            href="./places.html?place=Apple Supermarket" coords="877,740,1184,859" shape="rect">
        <area target="_blank" alt="CEELAM GRAND - BANQUET HALL" title="CEELAM GRAND - BANQUET HALL"
            href="./places.html?place=CEELAM GRAND - BANQUET HALL" coords="576,916,883,1035" shape="rect">

    </map>
    <!-- <img src="./img/" alt=""> -->
</div>



<body>

</body>

</html>
```

## places.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="title"></title>
    <script src="./places.js"></script>
    <style>
        * {
            margin: 0px;
            padding: 0px;
            font-family: 'Courier New', Courier, monospace;

        }

        header {
            width: 100%;
            height: 50px;
            text-align: center;
            background-color: black;
            color: aliceblue;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
        }

        section {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 800px;
            gap: 5%;

        }

        .side {
            width: 45%;
            height: 700px;
            background-color: rgb(248, 243, 235);
            border-radius: 30px;
            border: 1px solid black;
            display: flex;
            align-items: center;
            justify-content: center;

        }

        img {
            width: 95%;
            height: 95%;
            border-radius: 30px;

        }

        .right {
            flex-direction: column;
            justify-content: flex-start;
            gap: 3%;

        }

        p {
            width: 90%;
            font-size: 23px;
        }
    </style>
</head>

<body>
    
    <script>
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const params = new URLSearchParams(url.search);
        const paramValue = params.get('place');
        const district = places.find((e) => e.name == paramValue);
        createDomStructure(district)
        document.title = district.name






    </script>

</body>

</html>
```

## places.js
``` javascript
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

```
# OUTPUT
## Kodungaiyur Map 
![image](https://github.com/user-attachments/assets/731c553c-96bf-453c-ba0c-2476297ed642)

## Ceelam Hall 
![image](https://github.com/user-attachments/assets/2fa3e1cf-1124-4ed4-9ae1-53aa70df8560)

## Thiruthangal Nadar College
![image](https://github.com/user-attachments/assets/69b64c89-9795-41bc-bad7-b79dbed6831c)

## Madhavaram Botanical garden
![image](https://github.com/user-attachments/assets/1c1b630c-ecd1-457c-a559-56b9ca9c4943)

## Med-Plus Kodungaiyur
![image](https://github.com/user-attachments/assets/1ce59329-2091-44a2-ae80-a6e174fb503d)

## Apple Supermarket
![image](https://github.com/user-attachments/assets/481a7226-c6d5-4a5e-8363-cac8b672a320)



# RESULT
The program for implementing image maps using HTML is executed successfully.
