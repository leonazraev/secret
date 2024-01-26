import mongoose from "mongoose";


const StatisticSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    called_amount: {
        type: Number,
        default: 0
    },
    total_time: {
        type: Number,
        default: 0
    }
    //Are you sure about this approach?
    //They ask for runtime avg of the 2 functions, I think you only need a name and runtime then in the service calculate it by query group
    //It can be a good question to ask, because it's statistics maybe they want to analyze this data by days? years?
    //If it does, again think about indexes.
    //timestamps
});

const StatisticModel = mongoose.model("Statistic", StatisticSchema);

export default StatisticModel;
