var rawJSONString;

inlets = 1;
outlets = 20;

function anything(){

	//Get the arguments as an array
	var args = arrayfromargs(messagename, arguments);

	//The first one should be our json string
	rawJSONString = args[0];

	var JSONObject = JSON.parse(rawJSONString);

	var numHumans = 0;

	// The loop way - the preffered way!
	if(JSONObject.humans.length > 0){

		for(var human = 0; human < JSONObject.humans.length; human++){

			//Here we are iterating over every human, now we shall iterate over every part
			for(var limb = 0; limb < JSONObject.humans[human].length; limb++){
	
				// If you want to map specific parts to specific things
				switch(JSONObject.humans[human][limb][0]){
					case "Nose":
						outlet(0, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Neck":
						outlet(1, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Right_Eye":
						outlet(2, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Right_Ear":
						outlet(3, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Right_Shoulder":
						outlet(4, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Right_Elbow":
						outlet(5, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Right_Wrist":
						outlet(6, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Right_Hip":
						outlet(7, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Right_Knee":
						outlet(8, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Right_Ankle":
						outlet(9, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Left_Eye":
						outlet(10, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Left_Ear":
						outlet(11, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Left_Shoulder":
						outlet(12, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Left_Elbow":
						outlet(13, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Left_Wrist":
						outlet(14, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Left_Hip":
						outlet(15, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Left_Knee":
						outlet(16, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					case "Left_Ankle":
						outlet(17, JSONObject.humans[human][limb][1], JSONObject.humans[human][limb][2]);
						break;
					default:
						outlet(18, "We couldn't find any match to this limb on human number: ", human, " limb number ", limb);
				}


			}

			//Here we count the amount of humans, just for convinience!
			numHumans++;
		}
		   // post(18, JSONObject.humans[human][limb][0]); // Debug print!

		outlet(18, "We discovered that there are ", numHumans, " in the JSON file");
	}

}

