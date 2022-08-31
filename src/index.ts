import { JobRunner } from "./JobRunner";


const jobRunner = new JobRunner();
jobRunner.setJob(()=>{
    console.log('do first job');
}, 1);
jobRunner.setJob(()=>{
    console.log('do second job');
}, 2);
jobRunner.setJob(()=>{
    console.log('do third job');
}, 3);

jobRunner.run();
