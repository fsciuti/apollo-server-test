const sampleData = {
    Booking: [
      {
        id: 'b0',
        propertyId: 'p0',
        customerId: 'c0',
        startTime: '2019-05-04',
        endTime: '2019-06-03',
      },
      {
        id: 'b1',
        propertyId: 'p0',
        customerId: 'c0',
        startTime: '2019-06-04',
        endTime: '2019-07-03',
      },
      {
        id: 'b2',
        propertyId: 'p1',
        customerId: 'c0',
        startTime: '2019-10-04',
        endTime: '2019-10-03',
      },
      {
        id: 'b3',
        propertyId: 'p1',
        customerId: 'c0',
        startTime: '2019-10-04',
        endTime: '2019-10-03',
      },
      {
        id: 'b4',
        propertyId: 'p0',
        customerId: 'c0',
        startTime: '2019-10-04',
        endTime: '2019-10-03',
      },
    ],
    Customer: [
      {
        id: 'c0',
        email: 'examplec0@example.com',
        name: 'Exampler Customer V0',
        vehicleId: 'v0',
      },
      {
        id: 'c1',
        email: 'examplec1@example.com',
        name: 'Exampler Customer V1',
        vehicleId: 'v1',
      },
    ],
    Property: [
      {
        id: 'p0',
        name: 'Studio Property',
        type: 'Studio',
      },
      {
        id: 'p1',
        name: 'Villa Property',
        type: 'Villa',
      },
    ],  
    Vehicle: [
      {
        id: 'v0',
        bikeType: 'MOUNTAIN',
      },
      {
        id: 'v1',
        licensePlate: 'GRAPHQL',
      },
    ],
  };

  module.exports.sampleData = sampleData;