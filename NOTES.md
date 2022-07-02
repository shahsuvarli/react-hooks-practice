useEffect

1. useEffect istifade novleri:
   a. useEffect(func, null) - hem MOUNT, hem de UPDATE olunanda ishe dushecek
   b. useeffect(func, []) - yalniz MOUNT olunanda ishe dushecek
   c. useEffect(func, [props or state]) - hem MOUNT, hem de arraydeki deyishenler UPDATE olunanda ishe dushecek
   d. useEffect(return ()=>func()) - UNMOUNT kimi ishleyecek

2. useEffect hemcinin eger shouldComponent kimi ishleyerek eger deyer deyishmirse bu zaman update olunmur

useLayoutEffect

1. componentWillMount kimi ishleyecek
2. return run olandan sonra ishe dushur
3. useEffect-den evvel ishleyir
