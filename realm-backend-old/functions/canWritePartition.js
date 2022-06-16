exports = async function (partitionValue) {
  const cluster = context.services.get("mongodb-atlas");
  const userCollection = cluster.db("tracker").collection("User");

  console.log("userCollection BEGIN");
  console.log(userCollection);
  console.log("userCollection END");

  console.log("context.user.id BEGIN");
  console.log(context.user.id);
  console.log("context.user.id END");

  try {
    const user = await userCollection.findOne({ _id: context.user.id });
    // If the user's canWritePartitions array contains the partition, they may write to it
    return (
      user.canWritePartitions &&
      user.canWritePartitions.includes(partitionValue)
    );
  } catch (error) {
    console.error(`Couldn't find user ${context.user.id}: ${error}`);
    return false;
  }
};
