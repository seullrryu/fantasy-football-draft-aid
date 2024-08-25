# Fantasy Football Draft Aid
Currently this draft aid uses Boris Chen's rankings (fantasypros +  statistical clustering algorithm called a Gaussian mixture model) via Jay Zheng's API. 

1. `npm install`
2. download https://github.com/dynastyprocess/data/blob/master/files/values-players.csv and put inside the csv folder
3. `npm run dev` to start locally 

To use fantasy pros rankings: 
* download the most recent csv from fantasypros and put inside the csv folder
* Uncomment the code on the files 
* `npm run fantasypros`


# TODO
- [ ] Search functionality for drafted players 
- [x] Local storage save drafted players
- [x] Reset selections (both UI and local storage)
- [x] Teams 
- [ ] CSS Upgrades

