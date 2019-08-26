const { Kind, GraphQLScalarType } = require('graphql');
const { sampleData } = require('./sampleData');

// Custom Scalar
const DateTime = new GraphQLScalarType({
    name: 'DateTime',
    description: 'Date custom scalar type',
    parseValue(value) {
      return value; // value from the client
    },
    serialize(value) {
      return value; // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return ast.value;
    },
});

// Resolver map
const resolvers = {
    Query: {
      bookings(parent, { offset = 0, limit = 5, search = '' }) {
        const list = sampleData.Booking;
        return list.slice(offset, offset + limit);
      },
      customers(parent) {
        return sampleData.Customer;
      },
      properties(parent) {
        return sampleData.Property;
      },
    },
  
    Mutation: {
      addBooking(
        parent,
        { input: { propertyId, customerId, startTime, endTime } },
        context
      ) {
        if (!context.authToken) {
            throw new AuthenticationError('you must be logged in');
        }

        const booking = {
            id: `b${sampleData.Booking.length}`,
            propertyId,
            customerId,
            startTime,
            endTime,
        };
        sampleData.Booking.push(booking);
        return {
          code: 200,
          success: true,
          message: "Booking was added!",
          booking
        };
      },
      addCustomer(
        parent,
        { input: { name, email } },
        context
      ) {
        if (!context.authToken) {
            throw new AuthenticationError('you must be logged in');
        }

        const customer = {
            id: `c${sampleData.Customer.length}`,
            name,
            email
        };
        sampleData.Customer.push(customer);
        return {
          code: 200,
          success: true,
          message: "Customer was added!",
          customer
        };
      },
      addProperty(
        parent,
        { input: { name, type } },
        context
      ) {
        if (!context.authToken) {
            throw new AuthenticationError('you must be logged in');
        }

        const property = {
            id: `p${sampleData.Property.length}`,
            name,
            type
        };
        sampleData.Property.push(property);
        return {
          code: 200,
          success: true,
          message: "Property was added!",
          property
        };
      },
    },

    Booking: {
      customer(parent) {
        return sampleData.Customer.find(item => parent.customerId === item.id);
      },
      property(parent) {
        return sampleData.Property.find(item => parent.propertyId === item.id);
      }
    },
    
    Customer: {
      bookings(parent) {
        return sampleData.Booking.filter(
          (booking) => booking.customerId === parent.id,
        );
      },
      vehicle(parent) {
        return sampleData.Vehicle.find(item => parent.vehicleId === item.id);
      },
    },
    
    Vehicle: {
      __resolveType(parent) {
        if (parent.licensePlate) {
          return 'Car';
        } else if (parent.bikeType) {
          return 'Bike';
        } else {
          throw new Error('Could not resolve Vehicle type');
        }
      },
    },
  
    DateTime,

    PropertyType: {
      STUDIO: 'Studio',
      VILLA: 'Villa',
    },
  };

  module.exports.resolvers = resolvers;