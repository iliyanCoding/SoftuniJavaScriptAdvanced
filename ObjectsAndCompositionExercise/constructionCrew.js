function solve(worker){
    if(worker.dizziness == true){
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }

    //console.log(worker);
    return worker;
}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );

solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  );
