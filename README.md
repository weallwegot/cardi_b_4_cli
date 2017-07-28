# quotes and wisdom in your terminal. james baldwin, rappers, and various devs.
originally forked from [captainsafia/fortuity](https://github.com/captainsafia/fortuity) 
i had to make a quick dirty api, but source code for that is [here](https://github.com/weAllWeGot/CardiB_api) 


![this_is_why](https://media.giphy.com/media/xTiN0kxizOHzdVMYus/giphy.gif)


Hope to extend the functionality and the api it uses to include more artists and deeper catalogues.

### Install

```
$ npm install -g cardib4cli
```

#### Execute on startup

To print out a bar from a wise set of individuals every time you launch a new shell, you will
need to configure your shell so that this command runs on startup.

When you configure you have the option to get a completely random quote or to limit the pool from which quotes are chosen. 


The options presented below are essentially command line arguments.

here are the options, (you can mix and match as you see fit):

```
'james_baldwin'
'cardi_b'
'jay_z'
'nas'
'inspirational_code'
'kanye_west'
'lauryn_hill'
'tupac'
```

**Bash**


For a quote or lyric from any of the sources listed above use the following
```
$ echo 'cardib4cli' >> ~/.bash_profile
```


For lyrics only from kanye west or jay-z 
```
$ echo 'cardib4cli kanye_west jay_z' >> ~/.bash_profile
```


For only james baldwin quotes
```
$ echo 'cardib4cli james_baldwin' >> ~/.bash_profile
```


For only inspirational coding quotes
```
$ echo 'cardib4cli inspirational_code' >> ~/.bash_profile
```


For only lauryn_hill quotes
```
$ echo 'cardib4cli lauryn_hill' >> ~/.bash_profile
```
etc....
Same applies in scenarios below.
**Zsh**
```
$ echo 'cardib4cli' >> ~/.zprofile 
```

**Fish**
```
$ echo 'cardib4cli' >> ~/.config/fish/config.fish
```

### Usage
![baldwin_demo](http://g.recordit.co/ZeelOhfxKc.gif)

![gen_demo](http://g.recordit.co/ggx9CQYZiq.gif)

![demo](http://g.recordit.co/KBxtxFJlg1.gif)
