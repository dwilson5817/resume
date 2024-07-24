# Resume

![Pipeline status badge](https://gitlab.dylanw.dev/dylan/resume/badges/main/pipeline.svg)

My professional resume, available at [https://resume.dylanw.dev](https://resume.dylanw.dev).

### Building

This project is built using `pdflatex`, you can build it locally with the `texlive/texlive:latest` Docker image:

```shell
docker run --rm -v $(pwd)/src:/workdir -v $(pwd)/out:/out texlive/texlive:latest pdflatex -file-line-error -interaction=nonstopmode -synctex=1 -output-format=pdf -output-directory=/out main.tex
```
