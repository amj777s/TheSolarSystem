import { rover } from "types";

const Cameras: {[key in rover]: string []} = {
    'curiosity': ['fhaz', 'rhaz', 'mast', 'chemcam', 'mahli', 'mardi', 'navcam'],
    'opportunity': ['fhaz', 'rhaz', 'navcam', 'pancam', 'minites'],
    'spirit': ['fhaz', 'rhaz', 'navcam', 'pancam', 'minites']
}

export default Cameras;