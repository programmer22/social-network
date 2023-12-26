const { Model, fields } = require('drizzle-orm');

class Profile extends Model {}

Profile.init({
  // Assuming 'user_id' is a unique identifier from Clerk
  userId: fields.CharField({ unique: true }),
  firstName: fields.CharField(),
  lastName: fields.CharField(),
  email: fields.EmailField(),
  dateOfBirth: fields.DateField(),
  sex: fields.CharField()
}, { tableName: 'profiles' });

module.exports = Profile;
