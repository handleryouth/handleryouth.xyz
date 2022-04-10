import dbConnect from 'lib/dbConnect';

const queryHelper = async <T>(func: T) => {
  await dbConnect();
  const data = await func;
  return data;
};

export default queryHelper;
