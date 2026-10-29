// import { createServer, Model } from 'miragejs';
import { createServer, Model, Response } from 'miragejs';

createServer({
  models: {
    vans: Model,
    users: Model,
  },

  seeds(server) {
    server.create('van', {
      id: '1',
      name: 'Alpine Revel 4x4',
      // category: 'Off-Grid 4x4',
      badge: 'Most Popular',
      badgeColor: '#9d3d26',
      specs: { sleeps: 2, drive: 'AWD', feature: 'Solar' },
      price: 245,
      desc: "Built for the backcountry. Roof tent, solar array, and water system. Go where others can't.",
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBeAvtIa1pQS7zLm8h-D5NczdOdpXqqSwN4VYI1MJYIBfrn1D6q74N453-PN-zDqJecLg14AQD2LLXR1g3TOXTOoieGaWJqTXNgY8rNYONp787jT23tolJ5uAKBEJBytSb4i257TKI4ZI4wHD4ASkgvDH3C0WUDiizOE1FQ6PW2324Ytqi1P6LRDxSqM3sgohyR_4t9YrtdMe0ICYhREea1kVJcHqAapQ6KTnr5K4o',
      // type: 'simple',
      type: 'eco',
      hostId: '123',
      statusLabel: 'On trip • Returns oct 18',
      status: 'trip',

    });
    server.create('van', {
      id: '2',
      name: 'Canyon Cruiser Pop-Top',
      // category: 'Pop-Top Family',
      // badge: 'Family Favorite',
      // badgeColor: '#815200',
      specs: { sleeps: 4, drive: 'EcoBoost', feature: 'Pop-Top' },
      price: 210,
      desc: 'Room for the whole crew. Pop-top extends to sleep 4 with a full kitchen and outdoor shower.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBsk4b7gJt3rXOtdyn3vO18Y0gZeMWpR79MAr_F_Mz_-U7FOsoOMwPfVqenRrngqdWvH6Kc_hGhLKtyCbj9PoHxDYeH7KvcfutMWcDCMHn0P0dPRtD1GLMk3PrM6eUSOS1WAqA7SBcSLx78p4tB2NxrE9IY2enqYIou0bV_XSQqbIRYcs6qYIPK_8VjdiNMWtA9noVHV3lbN4g9aA98Z7qKgJkcZwqoAy2ZYa8-eKk',
      type: 'rugged',
      hostId: '143',
      statusLabel: 'On trip • Returns Jun 18',
      status: 'trip' | 'ready' | 'prep',
    });
    server.create('van', {
      id: '3',
      name: 'Redwood Studio 170',
      // category: 'Digital Nomad',
      // badge: 'Starlink Equipped',
      // badgeColor: '#456554',
      specs: { sleeps: 2, drive: 'RWD', feature: 'Starlink' },
      price: 275,
      desc: 'Work from anywhere. Studio-quality layout with Starlink internet, standing desk, and 600W solar.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAd4v85nhU4aCNtzOEM1i2wIkrx9kKn1kZKi4wYIwSrQrh4aecwqWQfhcgBsy5G7xP-pSyZvAZgtRHtoWfLPZrDbmpVDgfTfOsvxcXRIVbj-jszd9UBxIebsVjZsr2y-ua0WyFieOTtldo-rrtRG8aJhe7SgU6NM_te59yzKA6uGNQI5hXK21rER8iAp3fOItx-tm1CxfQlC3lJLrROLBZ0MHq_D5jLneReXG0DlVs',
      type: 'luxury',
      hostId: '123',
      statusLabel: 'Available • Next oct 21',
      status: 'trip' | 'ready' | 'prep',
    });
    server.create('van', {
      id: '4',
      name: 'Desert Fox Trail',
      // category: 'Compact Adventurer',
      // badge: 'Best Value',
      // badgeColor: '#815200',
      specs: { sleeps: 2, drive: 'AWD', feature: 'Compact' },
      price: 195,
      desc: "Nimble and capable. Fits in campsite spots bigger vans can't reach. Perfect for solo or couple adventures.",
      imageUrl:
        'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=600&q=80',
      type: 'simple',
      hostId: '122',
      statusLabel: 'On trip • Returns Jun 18',
      status: 'trip' | 'ready' | 'prep',
    });
    server.create('van', {
      id: '5',
      name: 'Pacific Ridge Sprinter',
      // category: 'Full-Size Expedition',
      // badge: 'Premium',
      // badgeColor: '#9d3d26',
      specs: { sleeps: 4, drive: '4x4', feature: 'Luxury' },
      price: 260,
      desc: 'The flagship. Full-size Sprinter with queen bed, full kitchen, bathroom, and high-roof standing room.',
      imageUrl:
        'https://images.pexels.com/photos/4577160/pexels-photo-4577160.jpeg',
      type: 'luxury',
      hostId: '223',
      statusLabel: 'On trip • Returns Jun 18',
      status: 'trip' | 'ready' | 'prep',
    });
    server.create('van', {
      id: '6',
      name: 'Summit Seeker Pro',
      // category: 'Off-Grid 4x4',
      // badge: 'Off-Grid',
      // badgeColor: '#456554',
      specs: { sleeps: 2, drive: 'AWD', feature: '400W Solar' },
      price: 230,
      desc: 'Engineered for alpine adventures. Dual-battery system, heating, and rugged suspension for high country.',
      imageUrl:
        'https://images.pexels.com/photos/11782302/pexels-photo-11782302.jpeg',
      type: 'rugged',
      hostId: '123',
      statusLabel: 'On trip • Returns oct 24',
      status: 'trip' | 'ready' | 'prep',
    });
    server.create('van', {
      id: '7',
      name: 'Modest Explorer',
      // category: 'Off-Grid 4x4',
      // badge: 'Off-Grid',
      // badgeColor: '#456554',
      specs: { sleeps: 2, drive: 'AWD', feature: '400W Solar' },
      price: 200,
      desc: 'Built for salt air and sandy trailheads. Rear garage for surfboards, a rinse-off shower, and a sunset-facing sliding door.',
      imageUrl:
        'https://vanreviewer.co.uk/wp-content/uploads/2025/02/Volkswagen-Transporter-review_22.webp',
      type: 'eco',
      hostId: '123',
      statusLabel: 'Available ',
      status:  'ready',
    });
    server.create('van', {
      id: '8',
      name: 'Dusty Wanderer',
      // category: 'Off-Grid 4x4',
      // badge: 'Off-Grid',
      // badgeColor: '#456554',
      specs: { sleeps: 2, drive: 'AWD', feature: '400W Solar' },
      price: 175,
      desc: 'Made for long, dry stretches off the grid. 600W of rooftop solar and a 12V freezer keep you powered for a week without hookups.',
      imageUrl:
        'https://www.shutterstock.com/image-photo/bernkastel-germany-september-23-2025-600w-2687146685.jpg',
      type: 'rugged',
      hostId: '456',
      statusLabel: 'On trip • Returns Jun 18',
      status: 'trip' | 'ready' | 'prep',
    });
    server.create('van', {
      id: '9',
      name: 'The Rolling Bungalow',
      // category: 'Off-Grid 4x4',
      // badge: 'Off-Grid',
      // badgeColor: '#456554',
      specs: { sleeps: 2, drive: 'AWD', feature: '400W Solar' },
      price: 220,
      desc: 'Room for the whole crew without the chaos. Fold-down bunks, a full kitchen, and extra storage for gear, snacks, and muddy boots.',
      imageUrl:
        'https://www.jochen-schweizer.at/images/https%3A%2F%2Fmain.static.jsmd-group.com%2Fassets%2F_default_upload_bucket%2Fvw-bulli-mieten-7828-12.jpg?w=735&h=483&fit=max&auto=format%2Ccompress&cs=srgb&dpr=2&q=50&s=19acf898289fef7db9ba8d97dfba69da',
      type: 'luxury',
      hostId: '789',
      statusLabel: 'On trip • Returns Jun 18',
      status: 'trip' | 'ready' | 'prep',
    });
    server.create('van', {
      id: '10',
      name: 'Penny Lane',
      // category: 'Off-Grid 4x4',
      // badge: 'Off-Grid',
      // badgeColor: '#456554',
      specs: { sleeps: 2, drive: 'AWD', feature: '400W Solar' },
      price: 245,
      desc: 'A nimble short-wheelbase van that fits in a standard parking space. Ideal for weekend escapes from the city with a fold-flat bed and cooktop.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qAXqL4oJZcsQqD43ZgaenCgS2eZ6KonwIA&s',
      type: 'simple',
      hostId: '123',
      statusLabel: 'On trip • Returns oct 28',
      status: 'trip' ,
    });
    server.create('van', {
      id: '11',
      name: 'Neon Nomad',
      // category: 'Off-Grid 4x4',
      // badge: 'Off-Grid',
      // badgeColor: '#456554',
      specs: { sleeps: 2, drive: 'AWD', feature: '400W Solar' },
      price: 195,
      desc: "Lifted suspension, all-terrain tires, and a recovery kit for remote forest roads. Built to reach trailheads other rentals can't.",
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxBuei5-u3igFLeQdeLYjNHjFRB7cpfpfig&s',
      type: 'luxury',
      hostId: '456',
      statusLabel: 'On trip • Returns Jun 18',
      status: 'trip' | 'ready' | 'prep',
    });
    server.create('van', {
      id: '12',
      name: 'Captain Obvious',
      // category: 'Off-Grid 4x4',
      // badge: 'Off-Grid',
      // badgeColor: '#456554',
      specs: { sleeps: 2, drive: 'AWD', feature: '400W Solar' },
      price: 165,
      desc: 'Designed with your four-legged co-pilot in mind. Washable flooring, a built-in pet bed, and a temperature monitor that alerts your phone.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6ugwQUbDmSI8CpQhhExVN-aBDIVhK_X49g&s',
      type: 'simple',
      hostId: '789',
      statusLabel: 'On trip • Returns Jun 18',
      status: 'trip' | 'ready' | 'prep',
    });
    server.create('van', {
      id: '13',
      name: 'Verde Vista',
      // category: 'Off-Grid 4x4',
      // badge: 'Off-Grid',
      // badgeColor: '#456554',
      specs: { sleeps: 2, drive: 'AWD', feature: '400W Solar' },
      price: 185,
      desc: 'A rolling office with a view. Fold-out standing desk, dual monitor mount, and fast satellite internet for work from anywhere.',
      imageUrl:
        'https://media.istockphoto.com/id/1419154425/photo/motorhome-volkswagen-california-ocean-next-to-the-lake.jpg?s=612x612&w=0&k=20&c=8IwnuujzT5YWXd2JEZ0O_N3zt7nVqJzL5ek_HkI2txo=',
      type: 'luxury',
      hostId: '123',
      statusLabel: 'Booked',
      status:  'prep',
    });
    server.create('van', {
      id: '14',
      name: 'The Drifter',
      // category: 'Off-Grid 4x4',
      // badge: 'Off-Grid',
      // badgeColor: '#456554',
      specs: { sleeps: 2, drive: 'AWD', feature: '400W Solar' },
      price: 255,
      desc: 'Space for month-long journeys. Full-height ceilings, a residential-style kitchen, and a wet bath so longer trips still feel like home.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUDtPK2TsZd4h-9OLdSahwphZBJ7WsY2v4w&s',
      type: 'simple',
      hostId: '456',
      statusLabel: 'On trip • Returns Jun 18',
      status: 'trip' | 'ready' | 'prep',
    });
    server.create('van', {
      id: '15',
      name: 'Glamour Wheels',
      // category: 'Off-Grid 4x4',
      // badge: 'Off-Grid',
      // badgeColor: '#456554',
      specs: { sleeps: 2, drive: 'AWD', feature: '400W Solar' },
      price: 150,
      desc: 'A simple, no-fuss camper for first-time vanlifers. Comfortable bed, basic kitchen, and all the essentials at an easy price.',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F99%2Fe4%2F21%2F99e4210ac896fdc1925856f59bd92f2b.jpg&f=1&nofb=1&ipt=83f9f5f2dcc11cef82dab12b9f808c16eed4c9da7d409a9ec55c147b688abe20',
      type: 'eco',
      hostId: '789',
      statusLabel: 'On trip • Returns Jun 18',
      status: 'trip' | 'ready' | 'prep',
    });
    server.create('van', {
      id: '16',
      name: 'Midnight Biscuit',
      // category: 'Off-Grid 4x4',
      // badge: 'Off-Grid',
      // badgeColor: '#456554',
      specs: { sleeps: 2, drive: 'AWD', feature: '400W Solar' },
      price: 270,
      desc: 'Made for warm-weather getaways by the water. Rear air conditioning, a roll-out awning, and an outdoor kitchen for lazy evenings by the shore.',
      imageUrl:
        'https://assets.carandclassic.com/uploads/new/30721791/oul-0499-luke-papworth.jpg?fill=blur&fit=fill&h=600&ixlib=php-4.1.0&q=85&w=800&s=bf2a7402efb579305c9a23df3d67aa39',
      type: 'simple',
      hostId: '123',
      statusLabel: 'Booked',
      status:  'prep',
    });
    server.create('user', {
      id: 1,
      email: 'd@d.com',
      password: 'rew',
      name: 'Admin',
    });
  },

  routes() {
    this.namespace = 'api';
    this.logging = false;
    this.passthrough('/*'); // ← add this last

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

    this.post('/login', (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);
      // This is an extremely naive version of authentication. Please don't
      // do this in the real world, and never save raw text passwords
      // in your database 😇
      const foundUser = schema.users.findBy({ email, password });
      if (!foundUser) {
        return new Response(
          401,
          {},
          { message: 'No user with those credentials found!' },
        );
      }

      // At the very least, don't send the password back to the client 😅
      foundUser.password = undefined;
      return {
        user: foundUser,
        token: "Enjoy your pizza, here's your tokens.",
      };
    });

    // this.post("/login", (schema, request) => {
    //   const {email, password} = JSON.parse(request.requestBody)

    //   const validUser = schema.users.findBy({email, password})

    //   if(!validUser) {
    //     return new Response(401, {}, {message: "No user found with this credentials"})
    //   }

    //   validUser.password = undefined
    //   return {
    //     user: validUser,
    //     token: "Here's your token, Enjoy!!!"
    //   }
    // })
  },
});
