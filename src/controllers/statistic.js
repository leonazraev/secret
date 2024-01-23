import express from 'express'
import {getStatisticRuntimeService, getTopCreatorService} from "../services/statistic.js";


export async function getTopCreatorController(req, res) {
    try {
        const topCreators = await getTopCreatorService();
        res.json(topCreators);
    } catch (error) {
        console.error(error);
        res.status(error.status).send(error.message);
    }
}

export async function getStatisticRuntimeController(req, res) {
    try {
        const statisticRuntimes = await getStatisticRuntimeService();
        res.json(statisticRuntimes);
    } catch (error) {
        res.status(error.status).send(error.message);
    }
}
