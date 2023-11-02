
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import '../assets/css/ProgressBar.css'

const medicalSymptoms = [
  "yellow sputum",
  "cardiovascular finding",
  "hypercapnia",
  "heavy feeling",
  "ambidexterity",
  "polymyalgia",
  "stinging sensation",
  "shortness of breath",
  "palpitation",
  "hypokalemia",
  "prostatism",
  "blanch",
  "monocytosis",
  "noisy respiration",
  "pallor",
  "feces in rectum",
  "sneeze",
  "feeling hopeless",
  "sputum purulent",
  "swelling",
  "left atrial hypertrophy",
  "welt",
  "intermenstrual heavy bleeding",
  "ecchymosis",
  "phonophobia",
  "fear of falling",
  "rhonchus",
  "inappropriate affect",
  "anosmia",
  "adverse effect",
  "hacking cough",
  "lameness",
  "scar tissue",
  "wheezing",
  "breath sounds decreased",
  "Heberden's node",
  "hypothermia, natural",
  "hyperventilation",
  "neologism",
  "chest tightness",
  "atypia",
  "incoherent",
  "hemianopsia homonymous",
  "mydriasis",
  "constipation",
  "fatigue",
  "pain foot",
  "symptom aggravating factors",
  "unresponsiveness",
  "heme positive",
"pin-point pupils",
"stool color yellow",
"groggy",
"frail",
"tremor",
"mass of body structure",
"large-for-dates fetus",
"general discomfort",
"feeling strange",
"immobile",
"redness",
"asymptomatic",
"worry",
"urinary hesitation",
"gravida 0",
"history of - blackout",
"hoard",
"side pain",
"hematocrit decreased",
"moan",
"unhappy",
"dysdiadochokinesia",
"heavy legs",
"unconscious state",
"headache",
"bradykinesia",
"paralyse",
"bedridden",
"hirsutism",
"clammy skin",
"pain abdominal",
"intoxication",
"mediastinal shift",
"cardiomegaly",
"decreased body weight",
"breakthrough pain",
"achalasia",
"rambling speech",
"claudication",
"rapid shallow breathing",
"indifferent mood",
"agitation",
"no status change",
"dyspnea",
"lesion",
"nasal discharge present",
"lightheadedness",
"r wave feature",
"hematochezia",
"titubation",
"lethargy",
"alcohol binge episode",
"cushingoid facies",
"focal seizures",
"hyponatremia",
"flushing",
"jugular venous distention",
"bedridden",
"myoclonus",
"passed stones",
"satiety early"]

const SymptomsInput = ({ currentPage }) => {
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [specialisationId, setSpecialisationId] = useState(null);
  const [specialisationName, setSpecialisationName] = useState('');

  // Hàm này sẽ được gọi mỗi khi người dùng thay đổi lựa chọn triệu chứng
  const handleSymptomChange = async (event) => {
    const symptom = event.target.value;
    setSelectedSymptom(symptom);

    // Replace spaces with '%20' to make the string URL-safe
    const symptomQuery = encodeURIComponent(symptom);

    try {
      const response = await axios.get(`https://1tn34qzc-3000.asse.devtunnels.ms/specialisations?symptom=${symptom}`);
      if (response.data && response.data.specialisation) {
        console.log(response.data.specialisation.Name)
        setSpecialisationId(response.data.specialisation._id);
        setSpecialisationName(response.data.specialisation.Name);
        console.log(response.data)
      } else {
        setSpecialisationId(null); // Reset if no specialisation is found
      }
    } catch (error) {
      console.error('Error fetching specialisation', error);
    }
  };

  return (
    <div>
      <div className="ProgressBar">
        <ProgressBar />
      </div>
      <form>
        <div className="w-full mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            What is your symptoms?
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              value={selectedSymptom}
              onChange={handleSymptomChange}
            >
              <option value=""></option>
              {medicalSymptoms.map(symptom =>(
                <option key={symptom}> {symptom}</option>
              ))}
              {/* Thêm các lựa chọn triệu chứng khác ở đây */}
            </select>
            {/* SVG và Wrapper... */}
          </div>
          <div className="text-center my-6">
            <Link to={`/SetAppointment?specialisation=${specialisationId}&specname=${specialisationName}`}>
              <Button className="" title="Next" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SymptomsInput;
