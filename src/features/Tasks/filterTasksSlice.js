import { createSlice } from '@reduxjs/toolkit'

export const filterTasks = createSlice({
    name: 'tagsList',
    initialState:
    {
        activeFilter: "today",
        showCompleted: false
    },
    reducers: {
        changeFilter: (state, action) => {

        },
        changeShowCompleted: (state) => {
            state.showCompleted = !state.showCompleted
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeFilter, changeShowCompleted } = filterTasks.actions

export default filterTasks.reducer