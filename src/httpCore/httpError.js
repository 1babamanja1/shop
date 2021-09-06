class HttpError extends Error {
  constructor({ message, name }) {
    super(message);
    this.message = message;
    this.name = name;
  }
}

const newHttpError = (error) => {
  return new HttpError({
    message: error.message,
    name: error.name
  });
};

export default newHttpError;