const initialState = {
  host: {
    name: 'Sierra Overlands',
    level: 'Superhost',
    depot: 'Sierra High Depot',
  },
  stats: {
    revenue: { value: '$8,420', note: '+14%' },
    occupancy: { value: '89%', note: '26d' },
    activeTrips: { value: '3', note: 'vans' },
    rating: { value: '4.96' },
  },
  expeditions: [
    {
      id: 1,
      guest: 'Lucas Vance',
      van: 'The Alpine Revel 4x4',
      status: 'tomorrow',
      label: 'Tomorrow',
      amount: '$2,450',
      dates: 'Jun 14 – 21',
      action: 'Prepare',
    },
    {
      id: 2,
      guest: 'David Miller',
      van: 'Ridge Nomad Beast',
      status: 'road',
      label: 'On Road',
      amount: '$2,970',
      dates: 'Jun 10 – 19',
      action: 'Track',
    },
    {
      id: 3,
      guest: 'Elena Rostova',
      van: 'Canyon Cruiser',
      status: 'upcoming',
      label: 'Upcoming',
      amount: '$3,000',
      dates: 'Jun 24 – Jul 02',
      action: 'Details',
    },
  ],
  fleet: [
    {
      id: 1,
      name: 'The Alpine Revel 4x4',
      note: 'Ready for pickup',
      status: 'ready',
      label: 'Ready',
    },
    {
      id: 2,
      name: 'Ridge Nomad Beast',
      note: 'Sawtooth Loop',
      status: 'active',
      label: 'Active',
    },
    {
      id: 3,
      name: 'Canyon Cruiser',
      note: 'Staged Sierra Bay 1',
      status: 'prep',
      label: 'Prep',
    },
  ],
  recent: [
    {
      id: 1,
      title: 'Payout transferred',
      detail: '$2,450 disbursed',
      time: '8:30 AM',
    },
    {
      id: 2,
      title: '5-star rating received',
      detail: 'Ridge Nomad Beast',
      time: 'Yesterday',
    },
  ],
};


export default initialState;