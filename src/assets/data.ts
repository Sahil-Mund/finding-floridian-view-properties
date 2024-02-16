
export const postCardDetails = [
    {
        id: 1,
        image:
            "https://images1.apartments.com/i2/C1XEqjvBXKaAxoSsgBovofHoJ6yEZJNz27YRO9bMphA/102/evo-apartments-saint-petersburg-fl-exterior.jpg?p=1",
        // price: "$4,200/m", //rent
        price: "4,200",
        title: "EVO APARTMENTS",
        url: "/property-detail", //needs to be dynamic
        bedroom: "1",
        bathroom: "1",
        area: "1,168",
        location: "Saint Petersburg",
    },
    {
        id: 2,
        image:
            "https://images1.apartments.com/i2/b26GcwoMfyiexBqRIqijjVeFQHXCcAjMikMimc7h124/116/ascent-st-petersburg-saint-petersburg-fl-5.jpg?p=1",
        price: "3,784",
        // minPrice: "2,259",
        // maxPrice: "5,689",
        title: "Ascent Apartments",
        url: "/property-detail",
        bedroom: "1",
        bathroom: "1",
        area: "811",
        location: "Saint Petersburg",
    },
    {
        id: 3,
        image:
            "https://images.ctfassets.net/pg6xj64qk0kh/4U3S3ZxP7j3XDGdpfmmr6N/1654052ce1d5e6dcfbeedf056fa57a64/camden-pier-district-apartments-st-petersburg-fl-looking-up.jpg?fm=webp&w=1202",
        price: "4,109",
        title: "Camden Pier District",
        url: "/property-detail",
        bedroom: "2",
        bathroom: "2",
        area: "1,250",
        location: "Saint Petersburg",
    }
];

export const TERMS_PDF_URL = './User Terms and Conditions.pdf'


export const apartmanetDetails = [
    {
        id: 1,
        isPremium: false,
        property_title: "EVO Apartments",
        banner: {
            img_url:
                "https://images1.apartments.com/i2/C1XEqjvBXKaAxoSsgBovofHoJ6yEZJNz27YRO9bMphA/102/evo-apartments-saint-petersburg-fl-exterior.jpg?p=1",
            heading: "360 Downtown Views",
            subheading: "EVO Apartments",
            desc: "“Your Peaceful Retreat”",
            rating: 5.0,
            // review: 0,
            location: "Saint Petersburg",
            para: "Whether your focus is labor or leisure, Evo is crafted to impress and built with custom conveniences in mind. You'll discover coworking spaces for career innovation and places to unwind like the rooftop terrace. The bay views are bound to take your breath away.",
            price: "$4,200",
            freq: "/per month",
            type: "rental",
            buttonLabel: "Talk with your Home Girl",
            contactURL: "https://evostpete.com/apartments/?spaces_tab=plan-detail&detail=250716",
            propertyOwner: {
                email: "abc@gmail.com",
            },
        },
        neighbourHood: {
            property_title: "EVO Apartments",
            desc: "is situated in a thriving community that offers safety, convenience, and a vibrant atmosphere.",
            grade: "A",
            left: {
                "Housing": "B-",
                "Health & Fitness": "A-",
                "Commute": "A-",
                "Cost of Living": "B-",
                "Outdoor Activities": "A-",
                "Good for Families": "B+",
            },
            right: {
                "Crime & Safety": "C",
                "Nightlife": "A",
                "Diversity": "A",
                "Weather": "A",
                "Jobs": "B",
                "Public Schools": "B",

            },

            location_url: "https://www.google.com/maps?ll=27.826383,-82.697457&z=11&t=m&hl=en&gl=IN&mapclient=embed&q=St.+Petersburg,+FL+33701+USA",
            iframe_src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112910.59273912094!2d-82.7798593421373!3d27.826510408264312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e19ba9c0be39%3A0x8ae47e3adb68d30a!2sSt.%20Petersburg%2C%20FL%2033701%2C%20USA!5e0!3m2!1sen!2sin!4v1708005058097!5m2!1sen!2sin"
        },
        apartmentDetails: {
            bedroom: "1",
            bath: "1",
            area: "1168",
            video_src: "https://vapi.apartments.com/video/play/5j5n4u?source=42",
            desc: `An incomparable view. And, you deserve the best St. Pete has to offer. Discover an indulgent city highrise with shopping, dining and cultural events right outside your door. Directly from your private balcony, you'll be surrounded by panoramic scenery of downtowns St. Petersburg's skyline and 244 miles of the sparkling Tampa Bay.`,
            img: "https://images1.apartments.com/i2/VptbAjENQxb5FXNc2rIx3NX5c_9TIe_fx-rpINLEcjE/116/evo-apartments-saint-petersburg-fl-building-photo.jpg?p=1",

        },
        apartmentFeatures: [
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/afe6ef62-cd9b-4e9f-8620-39b4f515ce78.png",
                subTitle: "Modern Comforts",
                desc: "Our spacious apartments offer modern amenities for your comfort. Enjoy fully-equipped kitchens and cozy living areas for a seamless stay.",
            },
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a3c084cf-d274-473a-943d-7fb59381b73a.png",
                subTitle: "Scenic View",
                desc: "Scenic Views Wake up to city vistas or tranquil surroundings. Our apartments provide a picturesque backdrop for your moments of reflection.",
            },
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/62b4d871-ece1-4ebf-be5b-9bbdbb67c7e9.png",
                subTitle: "Peaceful Ambiance",
                desc: "Peaceful Ambiance Relax in a meticulously designed, tranquil atmosphere. The Fridai Apartment is your haven for work, relaxation, and inner peace.",
            },
        ],
        extendedPerks: [
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/97d56d08-846f-43a7-8bf9-d7e27bdd983c.png",
                subTitle: "Stays",
                desc: "Flexible Stays Whether you're planning a month-long retreat or need an extended stay for work, our flexible booking options cater to your needs.",
            },
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/df90570b-1d80-4267-b042-c45f550f88b6.png",
                subTitle: "Dining",
                desc: "Dining Convenience Enjoy dining options within walking distance or take advantage of your fully-equipped kitchen to whip up your favorite meals.",
            },
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/13fd8728-41a7-4167-806d-58dd812544b7.png",
                subTitle: "Wifi",
                desc: "Complimentary Wi-Fi Stay connected with complimentary high-speed Wi-Fi available throughout the apartment.",
            },
        ],

        extendedPerksDesc:
            "Soak it all in, St. Pete welcomes you to an inclusive city full of opportunity. Offering a vibrant mix of tropical weather, culture, shopping, dining and recreation – downtown St. Petersburg is your next home for coastal adventure.<br> Walking distance from the bay and in the middle of the Waterfront Arts District, Evo is perfectly positioned to walk to museums, professional sports games, and sailing right on the water’s edge. Options are endless in this quaint, pedestrian friendly neighborhood. Let your soul shine, and come alive in St. Pete.",

        gallery:
            [
                "https://images1.apartments.com/i2/R0pUVRSlJ0qr0MV_hm4DA7ldpucz7NJzVC0SGz87b9s/116/evo-apartments-saint-petersburg-fl-lobby.jpg?p=1",
                "https://images1.apartments.com/i2/GgOGBQ5CB1amSnEeSbORsbrBSZMcTolRqlxpDlAzcGg/116/evo-apartments-saint-petersburg-fl-mail-room.jpg?p=1",
                "https://images1.apartments.com/i2/spNHCj9mzGYFdPcNCfIVJN5k8uZqp1s8SL2DpgcytjM/116/evo-apartments-saint-petersburg-fl-package-lockers.jpg?p=1",
                "https://images1.apartments.com/i2/Qd3IJ_YZdkMGCNaSwiTNMUJNekxTy-fmZngeM_dMgEY/116/evo-apartments-saint-petersburg-fl-leasing-office.jpg?p=1",
                "https://images1.apartments.com/i2/EMDREJdN8IlYVP_vHL-5SbPIU0mVQHjc086cbJsoIOM/116/evo-apartments-saint-petersburg-fl-co-working-space.jpg?p=1",
                "https://images1.apartments.com/i2/h0iukuCZn-s9pq3bCfXdz1GN4jthcsDBB6pkENaAO_0/116/evo-apartments-saint-petersburg-fl-fitness-center.jpg?p=1",
                "https://images1.apartments.com/i2/9pHdajLZYiH_GLrKDA1ouDEKzLspjJri07mFTi0DvUU/116/evo-apartments-saint-petersburg-fl-massage-room.jpg?p=1",
                "https://images1.apartments.com/i2/OH9rHF29HMswUheSZA2par-z4RGpsoGtNNq7cMdNDHg/116/evo-apartments-saint-petersburg-fl-sauna.jpg?p=1",
                "https://images1.apartments.com/i2/VptbAjENQxb5FXNc2rIx3NX5c_9TIe_fx-rpINLEcjE/116/evo-apartments-saint-petersburg-fl-building-photo.jpg?p=1",
                "https://images1.apartments.com/i2/F-T6_ym4spVC0_YOvs48Y3uTkhZYHzLlIHNUyR6LPFA/116/evo-apartments-saint-petersburg-fl-private-dining.jpg?p=1",
                "https://images1.apartments.com/i2/2lCQxCAFiZ7Kf9A9xnqqStXvdINv2NV8s0lhpVFSjbg/116/evo-apartments-saint-petersburg-fl-building-photo.jpg?p=1"
            ],
    },
    {
        id: 2,
        isPremium: true,

        property_title: "Ascent Apartments",
        banner: {
            img_url:
                "https://images1.apartments.com/i2/b26GcwoMfyiexBqRIqijjVeFQHXCcAjMikMimc7h124/116/ascent-st-petersburg-saint-petersburg-fl-5.jpg?p=1",
            heading: "Luxury Waterview Living",
            subheading: "Ascent Apartments",
            desc: "“Your Peaceful Retreat”",
            rating: 5.0,
            // review: 0,
            location: "Saint Petersburg",
            para: "An enriched lifestyle layered with the stuff that makes for your very best day. Your very brightest. Filled with downtown energy and sun-soaked vibrancy for those who like to live in the moment and step into the frequency of their highest vibe.",
            price: "$3,784",
            freq: "/per month",
            type: "rental",
            buttonLabel: "Talk with your Home Girl",
            contactURL: "https://ascentstpete.com/floorplans/",
            propertyOwner: {
                email: "abc@gmail.com",
            },
        },
        neighbourHood: {
            property_title: "Ascent Apartments",
            desc: "is situated in a thriving community that offers safety, convenience, and a vibrant atmosphere.",
            grade: "A",
            left: {
                "Housing": "B-",
                "Health & Fitness": "A-",
                "Commute": "A-",
                "Cost of Living": "B-",
                "Outdoor Activities": "A-",
                "Good for Families": "B+",
            },
            right: {
                "Crime & Safety": "C",
                "Nightlife": "A",
                "Diversity": "A",
                "Weather": "A",
                "Jobs": "B",
                "Public Schools": "B",

            },
            location_url: "https://www.google.com/maps?ll=27.826383,-82.697457&z=10&t=m&hl=en&gl=IN&mapclient=embed&q=St.+Petersburg,+FL+33701+USA",


            iframe_src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225821.65399698773!2d-82.8622682706131!3d27.826285196479425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e19ba9c0be39%3A0x8ae47e3adb68d30a!2sSt.%20Petersburg%2C%20FL%2033701%2C%20USA!5e0!3m2!1sen!2sin!4v1708080306752!5m2!1sen!2sin"
        },
        apartmentDetails: {
            bedroom: "1",
            bath: "1",
            area: "811",
            desc: `Centrally located in the heart of downtown St. Petersburg, Ascent offers awe-inspiring city and water views surrounded by walkable dining, shopping, art, and breathtaking beaches. A residence that inspires the feeling of opportunity within iconic design and luxury spaces, where the dramatic meets the whimsical, where your days are spent with ease in the St. Petersburg breeze.`,
            img: "https://ascentstpete.com/assets/images/cache/gallery_714_36-ce5b1d0e8ea546af911cd13d03d74813.jpg"
            ,
        },
        apartmentFeatures: [
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/afe6ef62-cd9b-4e9f-8620-39b4f515ce78.png",
                subTitle: "Modern Comforts",
                desc: "Our spacious apartments offer modern amenities for your comfort. Enjoy fully-equipped kitchens and cozy living areas for a seamless stay.",
            },
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a3c084cf-d274-473a-943d-7fb59381b73a.png",
                subTitle: "Scenic View",
                desc: "Scenic Views Wake up to city vistas or tranquil surroundings. Our apartments provide a picturesque backdrop for your moments of reflection.",
            },
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/62b4d871-ece1-4ebf-be5b-9bbdbb67c7e9.png",
                subTitle: "Peaceful Ambiance",
                desc: "Peaceful Ambiance Relax in a meticulously designed, tranquil atmosphere. The Fridai Apartment is your haven for work, relaxation, and inner peace.",
            },
        ],
        extendedPerks: [
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/97d56d08-846f-43a7-8bf9-d7e27bdd983c.png",
                subTitle: "Stays",
                desc: "Flexible Stays Whether you're planning a month-long retreat or need an extended stay for work, our flexible booking options cater to your needs.",
            },
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/df90570b-1d80-4267-b042-c45f550f88b6.png",
                subTitle: "Dining",
                desc: "Dining Convenience Enjoy dining options within walking distance or take advantage of your fully-equipped kitchen to whip up your favorite meals.",
            },
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/13fd8728-41a7-4167-806d-58dd812544b7.png",
                subTitle: "Wifi",
                desc: "Complimentary Wi-Fi Stay connected with complimentary high-speed Wi-Fi available throughout the apartment.",
            },
        ],

        extendedPerksDesc:
            // "An enriched lifestyle layered with the stuff that makes for your very best day. Your very brightest. Filled with downtown energy and sun-soaked vibrancy for those who like to live in the moment and step into the frequency of their highest vibe. <br>Complimentary building wide WIFI throughout  <br>Sun deck with pool, cabanas, & city views  <br>24-hour gym with cardio, free weights  <br>Co/work lounge w/ private meeting rooms  <br>Garage parking w/ EV car charging stations  <br>Elevated rooftop lounge w/ terrace & spectacular views  <br>",
            "Complimentary building wide WIFI throughout  <br>Sun deck with pool, cabanas, & city views  <br>24-hour gym with cardio, free weights  <br>Co/work lounge w/ private meeting rooms  <br>Garage parking w/ EV car charging stations  <br>Elevated rooftop lounge w/ terrace & spectacular views  <br>",

        gallery:
            [
                "https://ascentstpete.com/assets/images/cache/1-8d9de6db2f486efcc6ffc51cd9bde185.jpg",
                "https://ascentstpete.com/assets/images/cache/41-105eda93eb33a5f7ebda91ae0e5b028c.jpg",
                "https://ascentstpete.com/assets/images/cache/31-a5254123fd5086eaa741229b885f52e9.jpg",
                "https://ascentstpete.com/assets/images/cache/10-dd049256be5448f82f50d3b0f53ad793.jpg",
                "https://ascentstpete.com/assets/images/cache/52-d3ec9217088a128105e6982599cadfff.jpg",
                "https://ascentstpete.com/assets/images/cache/71-e30ec54b7270f6d927e8b0a56944e15d.jpg",
                "https://ascentstpete.com/assets/images/cache/62-b5174ca7df33dc7bdddae551c8fc81b1.jpg",
                "https://ascentstpete.com/assets/images/cache/8-f1bb0ed201ed2bbe07bfcfb1f46fe455.jpg",
                "https://ascentstpete.com/assets/images/cache/91-f01ec0564362dd9de89595c18bd53fe5.jpg",
                "https://ascentstpete.com/assets/images/cache/14-a21c0afafb869d6dcda0c349cf894f58.jpg",
                "https://ascentstpete.com/assets/images/cache/436_Ascent_St_Pete_Clubroom_Cam3_still_D1-9e12657b36c8a937659091b2ba25fdc4.jpeg",
                "https://ascentstpete.com/assets/images/cache/19-ec645b874876f493e0eceb24f8218a5c.jpg",
                "https://ascentstpete.com/assets/images/cache/WEST-350FT1-d774c5c69065ba3e029aa97a24b8cc83.jpg",
                "https://ascentstpete.com/assets/images/cache/gallery_718_36-ff209720d736a844a04d517a1fca405c.jpg",
                "https://ascentstpete.com/assets/images/cache/gallery_699_36-fdb52ce3fcbc7dc7c3e13c268a40e9cc.jpg",
            ],
    },

    {
        id: 3,
        isPremium: true,
        property_title: "Camden Pier District",
        banner: {
            img_url:
                "https://images.ctfassets.net/pg6xj64qk0kh/3jZ0GLc6I5hdz39SfIvgmn/ae716d1f37d4493b330c3aab4323a9d6/camden-pier-district-apartments-st-petersburg-fl-pool-navy.jpg?fm=webp&w=1202",
            heading: "Downtown St. Pete",
            subheading: "Camden Pier District",
            desc: "“Your Peaceful Retreat”",
            rating: 5.0,
            // review: 0,
            location: "Saint Petersburg",
            para: "Camden Pier District is all about location and in the heart of thriving downtown St. Petersburg. Take a step out of your studio, one-, two-, or three-bedroom apartment and find yourself blocks from the best food, drink, entertainment, and art the St. Pete area has to offer.",
            price: "$4,109",
            freq: "/per month",
            type: "rental",
            buttonLabel: "Talk with your Home Girl",
            contactURL: "https://www.camdenliving.com/apartments/st-petersburg-fl/camden-pier-district",

            propertyOwner: {
                email: "abc@gmail.com",
            },
        },
        neighbourHood: {
            property_title: "Camden Pier District",
            desc: "is situated in a thriving community that offers safety, convenience, and a vibrant atmosphere.",
            grade: "A",
            left: {
                "Housing": "B-",
                "Health & Fitness": "A-",
                "Commute": "A-",
                "Cost of Living": "B-",
                "Outdoor Activities": "A-",
                "Good for Families": "B+",
            },
            right: {
                "Crime & Safety": "C",
                "Nightlife": "A",
                "Diversity": "A",
                "Weather": "A",
                "Jobs": "B",
                "Public Schools": "B",

            },
            location_url: "https://www.google.com/maps?ll=27.826383,-82.697457&z=10&t=m&hl=en&gl=IN&mapclient=embed&q=St.+Petersburg,+FL+33701+USA",


            iframe_src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225821.65399698773!2d-82.8622682706131!3d27.826285196479425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e19ba9c0be39%3A0x8ae47e3adb68d30a!2sSt.%20Petersburg%2C%20FL%2033701%2C%20USA!5e0!3m2!1sen!2sin!4v1708080306752!5m2!1sen!2sin"
        },
        apartmentDetails: {
            bedroom: "2",
            bath: "2",
            area: "1,250",
            desc: `The modern apartment homes and amazing rooftop amenity spaces with panoramic views of the water and the city are above the rest. It is the perfect place to call home. Live in thriving downtown St. Petersburg and get to come home every day to the comforts of Camden Pier District. Luxury, exclusivity, panoramic views…you will have it all and #LiveAbove when you live at Camden Pier District.`,
            img: "https://images.ctfassets.net/pg6xj64qk0kh/1OGk3hWoPfQ3AlLand7Tz7/a1e9f9b6d3a913c0d82e5c234de6dd65/16-camden-pier-district-apartments-st-petersburg-fl-rooftop-outdoor-terrace.jpg?w=601"
            ,
        },
        apartmentFeatures: [
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/afe6ef62-cd9b-4e9f-8620-39b4f515ce78.png",
                subTitle: "Modern Comforts",
                desc: "Our spacious apartments offer modern amenities for your comfort. Enjoy fully-equipped kitchens and cozy living areas for a seamless stay.",
            },
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/a3c084cf-d274-473a-943d-7fb59381b73a.png",
                subTitle: "Scenic View",
                desc: "Scenic Views Wake up to city vistas or tranquil surroundings. Our apartments provide a picturesque backdrop for your moments of reflection.",
            },
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/62b4d871-ece1-4ebf-be5b-9bbdbb67c7e9.png",
                subTitle: "Peaceful Ambiance",
                desc: "Peaceful Ambiance Relax in a meticulously designed, tranquil atmosphere. The Fridai Apartment is your haven for work, relaxation, and inner peace.",
            },
        ],
        extendedPerks: [
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/97d56d08-846f-43a7-8bf9-d7e27bdd983c.png",
                subTitle: "Stays",
                desc: "Flexible Stays Whether you're planning a month-long retreat or need an extended stay for work, our flexible booking options cater to your needs.",
            },
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/df90570b-1d80-4267-b042-c45f550f88b6.png",
                subTitle: "Dining",
                desc: "Dining Convenience Enjoy dining options within walking distance or take advantage of your fully-equipped kitchen to whip up your favorite meals.",
            },
            {
                img: "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/13fd8728-41a7-4167-806d-58dd812544b7.png",
                subTitle: "Wifi",
                desc: "Complimentary Wi-Fi Stay connected with complimentary high-speed Wi-Fi available throughout the apartment.",
            },
        ],

        extendedPerksDesc:
            "Camden Pier District is all about location and in the heart of thriving downtown St. Petersburg. Take a step out of your studio, one, two or three-bedroom apartment and find yourself blocks from the best food, drink, entertainment, and art that the St. <br> Pete area has to offer. The modern apartment homes and amazing rooftop amenity spaces with panoramic views of the water and the city are above the rest. It is the perfect place to call home. <br> Live in thriving downtown St. Petersburg and get to come home every day to the comforts of Camden Pier District. Luxury, exclusivity, panoramic views…you will have it all and #LiveAbove when you live at Camden Pier District.",

        gallery:
            [
                "https://images.ctfassets.net/pg6xj64qk0kh/3jZ0GLc6I5hdz39SfIvgmn/ae716d1f37d4493b330c3aab4323a9d6/camden-pier-district-apartments-st-petersburg-fl-pool-navy.jpg?fm=webp&w=1202",
                "https://images.ctfassets.net/pg6xj64qk0kh/4U3S3ZxP7j3XDGdpfmmr6N/1654052ce1d5e6dcfbeedf056fa57a64/camden-pier-district-apartments-st-petersburg-fl-looking-up.jpg?w=601",
                "https://images.ctfassets.net/pg6xj64qk0kh/4fXWbqxmijdu44biijUhL/367e457be1857ccd04853bee7a666598/camden-pier-district-apartments-st-petersburg-fl-drone-view-1.JPG?w=601",
                "https://images.ctfassets.net/pg6xj64qk0kh/f8eWmpnkEc5stDhP3ieb4/767bdd7e4036f40ce6dbe8ace4597227/camden-pier-district-apartments-st-petersburg-fl-pool-and-grills-navy.jpg?w=601",
                "https://images.ctfassets.net/pg6xj64qk0kh/1vfaBd15a9lVljfNYjohVe/aab1f3040ba672c949f1541b52afdf84/8-camden-pier-district-apartments-st-petersburg-fl-outdoor-rooftop-fireplace-lounge.jpg?w=601",
                "https://images.ctfassets.net/pg6xj64qk0kh/3QUW4e9nVV0AlUkrrhSDKd/b2fdb8f63d3cbd7abc5d184291e57cc7/9-camden-pier-district-apartments-st-petersburg-fl-dry-sauna.jpg?w=601",
                "https://images.ctfassets.net/pg6xj64qk0kh/1u1g7ydOFCaI0z713nAiTj/9a14ef2565bba05186b2776c51c987d4/10-camden-pier-district-apartments-st-petersburg-fl-rooftop-spa-house.jpg?w=601",
                "https://images.ctfassets.net/pg6xj64qk0kh/3xT4aZ3BoFdsyreAFMfXT9/bd7f830e2f40d3c0ba95d73b94227744/12-camden-pier-district-apartments-st-petersburg-fl-rooftop-gym.jpg?w=601",
                "https://images.ctfassets.net/pg6xj64qk0kh/5GP2bRLnMcAOQ7DWeLJa7e/2b93b6fdfcbbf1d996edea93b18b1913/13-camden-pier-district-apartments-st-petersburg-fl-rooftop-gym-with-boxing-station.jpg?w=601",
                "https://images.ctfassets.net/pg6xj64qk0kh/1Fi08qDMOTyrcAwLKfZ4eB/6045f30abaa13d10e12eb6e96d63ea5b/14-camden-pier-district-apartments-st-petersburg-fl-sky-lounge-with-billiards.jpg?w=601",
                "https://images.ctfassets.net/pg6xj64qk0kh/623fCD9OiPYOSWI1kiPcI0/26c1d8cbece60e7bf6ca1099e4550e24/15-camden-pier-district-apartments-st-petersburg-fl-sky-lounge-with-demonstration-kitchen.jpg?w=601",
                "https://images.ctfassets.net/pg6xj64qk0kh/1OGk3hWoPfQ3AlLand7Tz7/a1e9f9b6d3a913c0d82e5c234de6dd65/16-camden-pier-district-apartments-st-petersburg-fl-rooftop-outdoor-terrace.jpg?w=601",

            ],
    }
]