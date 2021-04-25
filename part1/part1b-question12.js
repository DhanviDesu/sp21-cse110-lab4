let student = {
    name: 'sarah',
    major: 'computer sciecne',
    'grad year': '2022',
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

console.log(student.courseLoad[0]);