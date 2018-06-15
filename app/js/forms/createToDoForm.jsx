export default categories => [
  {
    type: 'text',
    name: 'todo-title',
    label: 'Title',
    placeholder: 'Enter title of your new todo'
  },
  {
    type: 'text',
    name: 'todo-description',
    label: 'Description',
    placeholder: 'Enter description of your new todo'
  },
  {
    type: 'selectTime',
    name: 'todo-time',
    label: 'Time',
    placeholder: 'Time, when todo should be completed',
    options: {
      hours: [
        { value: '00', title: '00 AM' },
        { value: '01', title: '01 AM' },
        { value: '02', title: '02 AM' },
        { value: '03', title: '03 AM' },
        { value: '04', title: '04 AM' },
        { value: '05', title: '05 AM' },
        { value: '06', title: '06 AM' },
        { value: '07', title: '07 AM' },
        { value: '08', title: '08 AM' },
        { value: '09', title: '09 AM' },
        { value: '10', title: '10 AM' },
        { value: '11', title: '11 AM' },
        { value: '12', title: '12 PM' },
        { value: '13', title: '13 PM' },
        { value: '14', title: '14 PM' },
        { value: '15', title: '15 PM' },
        { value: '16', title: '16 PM' },
        { value: '17', title: '17 PM' },
        { value: '18', title: '18 PM' },
        { value: '19', title: '19 PM' },
        { value: '20', title: '20 PM' },
        { value: '21', title: '21 PM' },
        { value: '22', title: '22 PM' },
        { value: '23', title: '23 PM' }
      ],
      minutes: [
        { value: '00', title: '00m' },
        { value: '15', title: '15m' },
        { value: '30', title: '30m' },
        { value: '45', title: '45m' }
      ]
    }
  },
  {
    type: 'select',
    name: 'todo-category',
    label: 'Category',
    placeholder: 'Select category or create a new one',
    options: categories
  }
]
