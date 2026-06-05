import { createServer, Model } from 'miragejs';
// import { createServer, Model, Response } from 'miragejs'; for force full error response

createServer({
  models: {
    vans: Model,
    users: Model,
  },

  seeds(server) {
    server.create('van', {
      id: '1',
      name: 'Midnight Glower',
      price: 60,
      description:
        'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!',
      imageUrl:
        'https://img.freepik.com/free-photo/white-delivery-van-driving-winter-road-near-snowy-field-commercial-transport-concept_169016-71593.jpg?semt=ais_hybrid&w=740&q=80',
      // type: 'simple',
      type: 'eco',
      hostId: '123',
    });
    server.create('van', {
      id: '2',
      name: 'Beach Bum',
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl:
        'https://img.magnific.com/free-photo/camper-van-scenic-road-autumn-travel-adventure_169016-69939.jpg?semt=ais_hybrid&w=740&q=80',
      type: 'rugged',
      hostId: '143',
    });
    server.create('van', {
      id: '3',
      name: 'Reliable Red',
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtOLhn_eJ9G7qVlBQVJFk8dd7IMVrlWQH3UA&s',
      type: 'luxury',
      hostId: '123',
    });
    server.create('van', {
      id: '4',
      name: 'Dreamfinder',
      price: 65,
      description:
        'Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.',
      imageUrl:
        'https://t3.ftcdn.net/jpg/01/61/53/54/360_F_161535418_xh1OUjp8M7VJfm8ivB0McXdHr9ZaKZj8.jpg',
      type: 'simple',
      hostId: '122',
    });
    server.create('van', {
      id: '5',
      name: 'The Cruiser',
      price: 120,
      description:
        'The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.',
      imageUrl:
        'https://th-thumbnailer.cdn-si-edu.com/1EHmzmAW53JQry_ad96CCOjuLnw=/1026x684/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/76/47/7647deda-76a2-4b7d-aa3f-7aff09453c4e/vw_microbus_1964.jpg',
      type: 'luxury',
      hostId: '223',
    });
    server.create('van', {
      id: '6',
      name: 'Green Wonder',
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl:
        'https://media.istockphoto.com/id/488119908/photo/volkswagen-transporter-t1.jpg?s=612x612&w=0&k=20&c=rsVHUo1PWyBP2kVeLCqdlidpc-qV5-oOvKOg3xtN_Y8=',
      type: 'rugged',
      hostId: '123',
    });
    server.create('van', {
      id: '7',
      name: 'Modest Explorer',
      price: 60,
      description:
        'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!',
      imageUrl:
        'https://vanreviewer.co.uk/wp-content/uploads/2025/02/Volkswagen-Transporter-review_22.webp',
      type: 'eco',
      hostId: '123',
    });
    server.create('van', {
      id: '8',
      name: 'Dusty Wanderer',
      price: 75,
      description:
        'The Dusty Wanderer was built for the open road and nothing else. Rugged suspension, roof-mounted storage, and a retractable awning make it equally at home on a forest trail or a desert highway. Sleep under the stars or hunker down in a surprise storm — this van handles it all.',
      imageUrl:
        'https://www.shutterstock.com/image-photo/bernkastel-germany-september-23-2025-600w-2687146685.jpg',
      type: 'rugged',
      hostId: '456',
    });
    server.create('van', {
      id: '9',
      name: 'The Rolling Bungalow',
      price: 120,
      description:
        'Why downsize when you can have it all? The Rolling Bungalow comes fully loaded with a queen-sized convertible bed, a full kitchenette, ambient LED mood lighting, and a cozy reading nook. This is van life with zero compromises.',
      imageUrl:
        'https://www.jochen-schweizer.at/images/https%3A%2F%2Fmain.static.jsmd-group.com%2Fassets%2F_default_upload_bucket%2Fvw-bulli-mieten-7828-12.jpg?w=735&h=483&fit=max&auto=format%2Ccompress&cs=srgb&dpr=2&q=50&s=19acf898289fef7db9ba8d97dfba69da',
      type: 'luxury',
      hostId: '789',
    });
    server.create('van', {
      id: '10',
      name: 'Penny Lane',
      price: 45,
      description:
        'Penny Lane is your no-fuss weekend escape. Stripped back to the essentials — a comfortable sleeping platform, a cooler, and a fold-out camp stove — she gets you out the door without burning a hole in your wallet. Simple, honest, and ready to roll.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qAXqL4oJZcsQqD43ZgaenCgS2eZ6KonwIA&s',
      type: 'simple',
      hostId: '123',
    });
    server.create('van', {
      id: '11',
      name: 'Neon Nomad',
      price: 95,
      description:
        'Equal parts art project and adventure vehicle, the Neon Nomad turns heads at every campground. Custom wrap exterior, color-shifting interior lights, a Bluetooth speaker system, and a rooftop deck for sunset hangs. Ideal for the van lifer who refuses to be boring.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxBuei5-u3igFLeQdeLYjNHjFRB7cpfpfig&s',
      type: 'luxury',
      hostId: '456',
    });
    server.create('van', {
      id: '12',
      name: 'Captain Obvious',
      price: 65,
      description:
        "Sometimes you just need a van that does exactly what it says on the tin. Captain Obvious sleeps two, has a plug-in cooler, a fresh water tank, and decent gas mileage. It won't win any design awards, but it will get you to the trailhead on time, every time.",
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6ugwQUbDmSI8CpQhhExVN-aBDIVhK_X49g&s',
      type: 'simple',
      hostId: '789',
    });
    server.create('van', {
      id: '13',
      name: 'Verde Vista',
      price: 85,
      description:
        'Verde Vista was designed with the planet in mind. Solar panels power everything onboard, a greywater recycling system keeps your footprint small, and all interior materials are sustainably sourced. Explore wild places while actually taking care of them.',
      imageUrl:
        'https://media.istockphoto.com/id/1419154425/photo/motorhome-volkswagen-california-ocean-next-to-the-lake.jpg?s=612x612&w=0&k=20&c=8IwnuujzT5YWXd2JEZ0O_N3zt7nVqJzL5ek_HkI2txo=',
      type: 'luxury',
      hostId: '123',
    });
    server.create('van', {
      id: '14',
      name: 'The Drifter',
      price: 55,
      description:
        "The Drifter has no fixed schedule and neither should you. It comes with a pull-out bed, under-floor storage, a propane burner, and a hand-drawn map of the previous owner's favorite spots tucked in the glove box. Some adventures are best started secondhand.",
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUDtPK2TsZd4h-9OLdSahwphZBJ7WsY2v4w&s',
      type: 'simple',
      hostId: '456',
    });
    server.create('van', {
      id: '15',
      name: 'Glamour Wheels',
      price: 150,
      description:
        'If glamping is your thing, Glamour Wheels is your van. Think linen curtains, a memory foam mattress, a Nespresso machine, heated floors, and a mini wine fridge. Park it in the woods and pretend roughing it means you forgot to bring a second bottle.',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F99%2Fe4%2F21%2F99e4210ac896fdc1925856f59bd92f2b.jpg&f=1&nofb=1&ipt=83f9f5f2dcc11cef82dab12b9f808c16eed4c9da7d409a9ec55c147b688abe20',
      type: 'eco',
      hostId: '789',
    });
    server.create('van', {
      id: '16',
      name: 'Midnight Biscuit',
      price: 70,
      description:
        'Nobody names a van "Midnight Biscuit" without having a story, and this one has plenty. Kitted out with blackout curtains, a pour-over coffee station, a hammock that stows under the rear bench, and a star map painted on the ceiling. Best enjoyed parked somewhere with zero cell service and absolutely no agenda.',
      imageUrl:
        'https://assets.carandclassic.com/uploads/new/30721791/oul-0499-luke-papworth.jpg?fill=blur&fit=fill&h=600&ixlib=php-4.1.0&q=85&w=800&s=bf2a7402efb579305c9a23df3d67aa39',
      type: 'simple',
      hostId: '123',
    });
    server.create('user', {id:1, email:"demo@d.com", password:"test123", name:"Admin"})
  },

  routes() {
    this.namespace = 'api';
    this.logging = false;

    this.get('/vans', (schema) => {
      // return new Response(
      //   404, // status code — bad request
      //   {}, // headers — empty here
      //   { error: 'Error in fetching data' }, // body — the actual response data
      // );
      return schema.vans.all();
    });

    this.get('/vans/:id', (schema, request) => {
      const id = request.params.id;
      return schema.vans.find(id);
    });

    this.get('/host/vans', (schema) => {
      return schema.vans.where({ hostId: '123' });
    });

    this.get('/host/vans/:id', (schema, request) => {
      const id = request.params.id;
      return schema.vans.findBy({ id, hostId: '123' });
    });

    this.post("/login", (schema, request) => {
      const {email, password} = JSON.parse(request.requestBody)

      const validUser = schema.users.findBy({email, password})

      if(!validUser) {
        return new Response(401, {}, {message: "No user found with this credentials"})
      }

      validUser.password = undefined
      return {
        user: validUser,
        token: "Here's your token, Enjoy!!!"
      }
    })
  },
});
