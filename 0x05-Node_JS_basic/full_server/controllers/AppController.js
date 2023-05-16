/**
 * Contains the miscellaneous route handlers.
 * @author Sunday Jimoh <https://github.com/sunday4me>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
