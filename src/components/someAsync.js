
export default function someAsync() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("success")
        }, 3000);
     })
}  