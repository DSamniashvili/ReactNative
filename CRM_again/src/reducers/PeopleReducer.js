// import people from './people.json';

const initialState = {
    people: [],
    selectedPerson: null,
    detailView: false,
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    company: '',
    project: '',
    notes: '',
    loadingPeople: false,
    toUpdate: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_FETCH':
            return {
                ...state,
                people: action.payload,
            }
        case "SELECTED_PERSON":
            return {
                ...state,
                selectedPerson: action.payload,
                detailView: true
            }
        case "NONE_SELECTED":
            return {
                ...state,
                selectedPerson: null,
                detailView: false
            }
        case "FORM_UPDATE":
            return {
                ...state,
                [action.payload.prop]: action.payload.value,
            }
        case "NEW_CONTACT":
            return {
                ...state,
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                company: '',
                project: '',
                notes: '',
            }

        case "ADD_PERSON":
            return {
                ...state,
                ...action.newPerson
            };
        case 'DELETE_CONTACT':
            return {
                ...state,
                detailView: false,
                selectedPerson: null,
            };
        case "UPDATE_CONTACT":
            return {
                ...state,
                toUpdate: true,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                phone: action.payload.phone,
                email: action.payload.email,
                company: action.payload.company,
                project: action.payload.project,
                notes: action.payload.notes,
                uid: action.payload.uid,
            };
        case "SAVE_CONTACT":
            return {
                ...state,
                toUpdate: false,
                detailView: false,
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                company: '',
                project: '',
                notes: '',
                uid: '',
            };
        default:
            {
                return state;
            }
    }
}