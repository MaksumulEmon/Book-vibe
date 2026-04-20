


 const getAllReadFromLocalDB = () => {
    const allReadList = localStorage.getItem("readList")
    console.log(allReadList, "From localDB")

    if(allReadList) return JSON.parse(allReadList);
    return [];
;
}


const addReadListToLocalDB = (book) => {
     const allBooks = getAllReadFromLocalDB();
     const isAllReadyExist = allBooks.find(bk => bk.bookId === book.bookId)
     if(!isAllReadyExist){
        // iiiiiii
        allBooks.push(book);
        localStorage.setItem("readList" , JSON.stringify(allBooks))
     }
};


export   {getAllReadFromLocalDB, addReadListToLocalDB}