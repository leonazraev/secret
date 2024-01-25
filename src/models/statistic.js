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
    //They ask for runtime
});

const StatisticModel = mongoose.model("Statistic", StatisticSchema);

export default StatisticModel;
