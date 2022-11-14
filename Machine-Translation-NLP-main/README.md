# **NLP-LMs-MTs**
[![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/no-ragrets.svg)](https://forthebadge.com)

-----
## ***Abstract:***

We Implement Language Models for English and French using the dataset provided to us. We Implement Machine Translation code between English and French and generate desired results and observations. 

-----
## ***Objectives:***
**This repository intends to:**
1. Create a neural language model using a recurrent architecture such as LSTMs for both the language
corpora provided. 
2. Design a Sequence-to-Sequence
Machine Translation model to translate from English to French using LSTMs on the given corpus. 

-----
## ***File Structure:***
1. `ipynb` is a folder for codes used in this project in `.ipynb` format instead of `.py`.
2. `models` folder containing the English and French language models in `.ckpt` format. 
3. `extra` contains images or extra snippets used for writing the report. 
4. `eng_lm.py` code which makes and generates an English language model on the **Europarl Corpus**.
5. `fr_lm.py` code which makes and generates a French language model on the **News-Crawl-Corpus**.
6. `mt_model1.py` Machine Translation model which generates French sentences taking input of English sentences and report **bleu_scores**.
7. `.txt` files are the required generated results on the input files. 

-----

## ***Execution:***

The code can be fully executed in the following manner:
```py
python3 <filename>.py
```
The order in which the files are run is:
1. `eng_lm.py`
2. `fr_lm.py`
3. `mt_model1.py`

-----

