const path = require("path");
const fs = require("fs");
const fsPromise = require("fs").promises;

const filePath = "C:/Users/PC/Documents/node-crash/files/sample.txt";

//dirname
console.log(path.dirname(filePath));
console.log(__dirname);
//basename
console.log(path.basename(filePath));
console.log(__filename);
//extension
console.log(path.extname(filePath));

const sampleFile = "sample.txt"

console.log(path.join(path.dirname(filePath)), sampleFile);
console.log(fs);

//reading from a file

fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw new Error("Something went wrong!");
    console.log(data);
    console.log(data.toString());
})

try {
    const data = fs.readFileSync(path.join(__dirname, "files", "sample.txt"), "utf-8");
    console.log("readfileSync fs", data);
}
catch (err) {
    console.log(err);

}


const filereading = async () => {

    try {
        const data = await fsPromise.readFile(filePath, { encoding: "utf-8" });
        console.log("fsPromise ", data);

    }
    catch (err) {

        console.log(err);

    }
}

filereading();

//Write into file
const txtFile = path.join(__dirname, "files", "text.txt");
const content = "I love this nodejs tutorial series";
fs.writeFile(txtFile, content, (err) => {
    if (err) throw new Error("Something went wrong!");
    console.log("Write operation completed successfully");
    fs.readFile(txtFile, "utf-8", (err, data) => {
        if (err) throw new Error(err);
        console.log(data);
    })
});

const writingInFile = async () => {
    try {

        await fsPromise.writeFile(txtFile, content);
        await fs.promises.rename(txtFile, path.join(__dirname, "files", "newtxt.txt"));
        // await fsPromise.appendFile(txtFile, "\n It's Awesome", {
        //     flag: "a+",
        // });
        const data = await fsPromise.readFile(path.join(__dirname, "files", "newtxt.txt"))
        console.log("after write file, read file fs promise ",data.toString());
    }
    catch (err) {
        console.log(err);

    }

}

writingInFile();