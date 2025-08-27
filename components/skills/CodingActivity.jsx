"use client";
import { useEffect, useState } from 'react';

export default function CodingActivity({ githubUser }){
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ repos: 0, stars: 0, prs: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    let mounted = true;
    async function fetchData(){
      try{
        const u = await fetch(`https://api.github.com/users/${githubUser}`).then(r=>r.json());
        // repos and followers available
        const repos = u.public_repos || 0;
        // fetch stars by listing repos and summing stargazers_count (may be paginated; we fetch first 100)
        const repoList = await fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100`).then(r=>r.json());
        const stars = Array.isArray(repoList) ? repoList.reduce((s, r)=>s + (r.stargazers_count||0), 0) : 0;
        // PRs authored: search issues for type:pr author:<user>
        const prsJson = await fetch(`https://api.github.com/search/issues?q=type:pr+author:${githubUser}`).then(r=>r.json());
        const prs = prsJson.total_count || 0;
        if(!mounted) return;
        setUser(u);
        setStats({ repos, stars, prs });
      }catch(e){
        console.error(e);
      }finally{ setLoading(false); }
    }
    fetchData();
    return ()=>{ mounted = false; };
  },[githubUser]);

  return (
    <div className="p-4 bg-surface border border-divider rounded-md">
      <div className="flex items-center gap-4">
        <img src={`https://avatars.githubusercontent.com/${githubUser}`} alt="avatar" className="w-12 h-12 rounded-full" />
        <div>
          <div className="font-semibold">{githubUser}</div>
          <div className="text-sm text-text-secondary">GitHub activity snapshot</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="p-3 bg-background rounded text-center">
          <div className="text-lg font-bold">{loading ? '…' : stats.repos}</div>
          <div className="text-xs text-text-secondary">Repositories</div>
        </div>
        <div className="p-3 bg-background rounded text-center">
          <div className="text-lg font-bold">{loading ? '…' : stats.prs}</div>
          <div className="text-xs text-text-secondary">Pull Requests</div>
        </div>
        <div className="p-3 bg-background rounded text-center">
          <div className="text-lg font-bold">{loading ? '…' : stats.stars}</div>
          <div className="text-xs text-text-secondary">Stars</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-sm text-text-secondary mb-2">Contribution graph</div>
        <div className="w-full overflow-hidden rounded border border-divider">
          {/* public svg heatmap provided by ghchart.rshah.org */}
          <img src={`https://ghchart.rshah.org/${githubUser}`} alt="contribution graph" className="w-full block" />
        </div>
      </div>

    </div>
  );
}
